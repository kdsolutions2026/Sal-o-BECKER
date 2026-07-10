(function () {
  const CART_KEY = "becker:cart";
  const isFileProtocol = window.location.protocol === "file:";
  const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);
  const runtime = window.BECKER_RUNTIME || {};
  const runtimeApiBaseUrl = String(runtime.apiBaseUrl || "").trim().replace(/\/$/, "");
  const runtimeApiKey = String(runtime.apiKey || "").trim();
  const endpointMap = {
    config: {
      node: "http://localhost:3000/api/config",
      supabase: "config",
      php: "../../backend/api/config.php",
    },
    shippingQuote: {
      node: "http://localhost:3000/api/shipping-quote",
      supabase: "shipping-quote",
      php: "../../backend/api/shipping-quote.php",
    },
    processPayment: {
      node: "http://localhost:3000/api/process_payment",
      supabase: "process-payment",
      php: "../../backend/api/process-payment.php",
    },
  };

  const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  const summaryItems = document.querySelector("[data-mp-summary-items]");
  const summaryTotal = document.querySelector("[data-mp-summary-total]");
  const subtotalEl = document.querySelector("[data-mp-subtotal]");
  const shippingEl = document.querySelector("[data-mp-shipping]");
  const statusEl = document.querySelector("[data-mp-status]");
  const resultEl = document.querySelector("[data-mp-result]");
  const resultBadgeEl = document.querySelector("[data-mp-result-badge]");
  const resultTitleEl = document.querySelector("[data-mp-result-title]");
  const resultMessageEl = document.querySelector("[data-mp-result-message]");
  const resultMetaEl = document.querySelector("[data-mp-result-meta]");
  const resultActionsEl = document.querySelector("[data-mp-result-actions]");
  const pixBoxEl = document.querySelector("[data-mp-pix]");
  const pixImageEl = document.querySelector("[data-mp-pix-image]");
  const pixCodeEl = document.querySelector("[data-mp-pix-code]");
  const copyPixButton = document.querySelector("[data-copy-pix]");
  const customerForm = document.querySelector("[data-customer-form]");
  const cardBrickContainer = document.getElementById("cardPaymentBrick_container");
  const stepIndicator = document.querySelector("[data-step-indicator]");
  const stageEls = Array.from(document.querySelectorAll("[data-stage]"));
  const nextStageButtons = Array.from(document.querySelectorAll("[data-next-stage]"));
  const prevStageButtons = Array.from(document.querySelectorAll("[data-prev-stage]"));
  const shippingModes = document.querySelector("[data-shipping-modes]");
  const shippingForm = document.querySelector("[data-shipping-form]");
  const shippingZipInput = document.querySelector("[data-shipping-zip]");
  const shippingCalcButton = document.querySelector("[data-calc-shipping]");
  const shippingFeedback = document.querySelector("[data-shipping-feedback]");
  const paymentChooser = document.querySelector("[data-payment-chooser]");
  const paymentMethodButtons = Array.from(document.querySelectorAll("[data-payment-method]"));
  const paymentPanels = Array.from(document.querySelectorAll("[data-payment-panel]"));
  const generatePixButton = document.querySelector("[data-generate-pix]");

  if (!summaryItems || !summaryTotal || !statusEl || !customerForm || !resultEl) return;

  const catalog = typeof products !== "undefined" && Array.isArray(products) ? products : [];
  const productMap = new Map(catalog.map((product) => [product.id, product]));
  const checkoutState = {
    currentStage: "customer",
    paymentMethod: "pix",
    items: [],
    subtotal: 0,
    shippingMode: "pickup",
    shippingAmount: 0,
    shippingLabel: "Retirada no salao",
    shippingZip: "",
    orderTotal: 0,
  };

  let bricksBuilder = null;
  let cardPaymentBrickController = null;
  let cardBrickMountId = null;
  let cardBrickRenderedAmount = null;
  let isRenderingCardBrick = false;
  let isTestMode = false;
  let checkoutConfigPromise = null;

  const endpoint = (key) => {
    // Prefer Supabase whenever runtime config is available, even from file:// during manual QA.
    if (runtimeApiBaseUrl) return `${runtimeApiBaseUrl}/${endpointMap[key].supabase}`;
    if (isFileProtocol || isLocalhost) return endpointMap[key].node;
    return endpointMap[key].php;
  };

  const apiFetch = (key, options = {}) => {
    const url = endpoint(key);
    const headers = { ...(options.headers || {}) };

    if (runtimeApiBaseUrl && url.startsWith(runtimeApiBaseUrl)) {
      if (!runtimeApiKey) {
        throw new Error("Falta configurar a Publishable Key do Supabase em scripts/runtime-config.js para usar o checkout publicado.");
      }
      headers.apikey = runtimeApiKey;
      headers.Authorization = `Bearer ${runtimeApiKey}`;
    }

    return fetch(url, { ...options, headers });
  };

  const loadCheckoutConfig = async () => {
    if (checkoutConfigPromise) return checkoutConfigPromise;

    checkoutConfigPromise = apiFetch("config")
      .then(async (response) => {
        const config = await response.json().catch(() => ({}));
        if (!response.ok || !config.publicKey) {
          throw new Error(config.error || "Public Key nao configurada no servidor.");
        }
        isTestMode = Boolean(config.isTestMode);
        return config;
      })
      .catch((error) => {
        checkoutConfigPromise = null;
        throw error;
      });

    return checkoutConfigPromise;
  };

  const getCart = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const resolveCart = () =>
    getCart()
      .map((entry) => {
        const product = productMap.get(entry.id);
        if (!product || !(Number(product.price) > 0)) return null;
        const qty = Math.max(1, Number(entry.qty || 1));
        return {
          id: product.id,
          name: product.name,
          image: product.image,
          qty,
          unitPrice: Number(product.price),
          total: Number(product.price) * qty,
        };
      })
      .filter(Boolean);

  const cartTotals = (items) =>
    items.reduce(
      (acc, item) => {
        acc.qty += item.qty;
        acc.total += item.total;
        return acc;
      },
      { qty: 0, total: 0 }
    );

  const assetUrl = (path) => `../${path}`;
  const normalizeDigits = (value) => String(value || "").replace(/\D/g, "");
  const isRepeatedDigits = (value) => /^(\d)\1+$/.test(value);
  const isValidCpf = (value) => {
    const digits = normalizeDigits(value);
    if (digits.length !== 11 || isRepeatedDigits(digits)) return false;

    const calcDigit = (base, factor) => {
      let total = 0;
      for (const digit of base) {
        total += Number(digit) * factor--;
      }
      const remainder = (total * 10) % 11;
      return remainder === 10 ? 0 : remainder;
    };

    const firstDigit = calcDigit(digits.slice(0, 9), 10);
    const secondDigit = calcDigit(digits.slice(0, 10), 11);
    return firstDigit === Number(digits[9]) && secondDigit === Number(digits[10]);
  };

  const splitFullName = (value) => {
    const parts = String(value || "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return { firstName: "", lastName: "" };
    return {
      firstName: parts[0],
      lastName: parts.slice(1).join(" "),
    };
  };

  const showStatus = (message, tone) => {
    statusEl.textContent = message;
    statusEl.dataset.tone = tone || "neutral";
  };

  const testModeMessage =
    "Ambiente de teste: o Pix gerado nao recebe pagamento real. Troque para credenciais de producao para escanear e pagar no celular.";

  const setShippingFeedback = (message, tone) => {
    if (!shippingFeedback) return;
    shippingFeedback.textContent = message;
    shippingFeedback.dataset.tone = tone || "neutral";
  };

  const showResult = ({ title, message, meta, pix, tone, showBackHome }) => {
    resultEl.hidden = false;
    resultEl.dataset.tone = tone || "neutral";
    resultTitleEl.textContent = title;
    resultMessageEl.textContent = message;
    resultMetaEl.innerHTML = meta || "";
    if (resultBadgeEl) resultBadgeEl.hidden = tone !== "success";
    if (resultActionsEl) resultActionsEl.hidden = !showBackHome;

    if (pix && pix.code && pix.qrCodeBase64) {
      pixBoxEl.hidden = false;
      pixImageEl.src = `data:image/png;base64,${pix.qrCodeBase64}`;
      pixCodeEl.value = pix.code;
    } else {
      pixBoxEl.hidden = true;
      pixImageEl.removeAttribute("src");
      pixCodeEl.value = "";
    }

    resultEl.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const hideResult = () => {
    resultEl.hidden = true;
    resultEl.dataset.tone = "neutral";
    resultTitleEl.textContent = "Pagamento iniciado";
    resultMessageEl.textContent = "Seu pedido foi enviado para processamento.";
    resultMetaEl.innerHTML = "";
    if (resultBadgeEl) resultBadgeEl.hidden = true;
    if (resultActionsEl) resultActionsEl.hidden = true;
    pixBoxEl.hidden = true;
    pixImageEl.removeAttribute("src");
    pixCodeEl.value = "";
  };

  const syncCartUi = () => {
    if (typeof state !== "undefined") state.cart = [];
    localStorage.setItem(CART_KEY, "[]");
    if (typeof renderCart === "function") renderCart();
  };

  const renderSummary = () => {
    const items = resolveCart();
    const totals = cartTotals(items);

    checkoutState.items = items;
    checkoutState.subtotal = Number(totals.total.toFixed(2));
    checkoutState.orderTotal = Number((checkoutState.subtotal + checkoutState.shippingAmount).toFixed(2));
    hideResult();

    if (!items.length) {
      summaryItems.innerHTML = '<p class="lead">Seu carrinho esta vazio. Volte para a loja e adicione produtos antes de abrir o checkout.</p>';
      subtotalEl.textContent = money.format(0);
      if (shippingEl) shippingEl.textContent = "Retirada no salao";
      summaryTotal.textContent = money.format(0);
      showStatus("Seu carrinho esta vazio. Adicione itens para liberar o pagamento.", "warning");
      if (cardBrickContainer) cardBrickContainer.hidden = true;
      return { items: [], total: 0 };
    }

    summaryItems.innerHTML = items
      .map(
        (item) =>
          `<article class="summary-item"><img src="${assetUrl(item.image)}" alt="${item.name}"><div><h4>${item.name}</h4><span>${item.qty} item(ns)</span></div><strong>${money.format(item.total)}</strong></article>`
      )
      .join("");

    subtotalEl.textContent = money.format(checkoutState.subtotal);
    if (shippingEl) {
      shippingEl.textContent =
        checkoutState.shippingAmount > 0
          ? `${checkoutState.shippingLabel} - ${money.format(checkoutState.shippingAmount)}`
          : checkoutState.shippingLabel;
    }
    summaryTotal.textContent = money.format(checkoutState.orderTotal);
    return { items, total: checkoutState.orderTotal };
  };

  const formatCpf = (value) => {
    const digits = normalizeDigits(value).slice(0, 11);
    return digits
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1-$2");
  };

  const formatPhone = (value) => {
    const digits = normalizeDigits(value).slice(0, 11);
    if (digits.length <= 10) {
      return digits.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
    }
    return digits.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
  };

  const formatZip = (value) => normalizeDigits(value).slice(0, 8).replace(/^(\d{5})(\d)/, "$1-$2");

  customerForm.querySelector('input[name="cpf"]')?.addEventListener("input", (event) => {
    event.target.value = formatCpf(event.target.value);
  });

  customerForm.querySelector('input[name="phone"]')?.addEventListener("input", (event) => {
    event.target.value = formatPhone(event.target.value);
  });

  shippingZipInput?.addEventListener("input", (event) => {
    event.target.value = formatZip(event.target.value);
  });

  copyPixButton?.addEventListener("click", async () => {
    const value = pixCodeEl.value.trim();
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      copyPixButton.textContent = "Pix copiado";
      window.setTimeout(() => {
        copyPixButton.textContent = "Copiar chave Pix";
      }, 1800);
    } catch {
      showStatus("Nao consegui copiar automaticamente. Copie o codigo do campo acima.", "warning");
    }
  });

  const getBuyerData = () => {
    const data = new FormData(customerForm);
    const fullName = String(data.get("fullName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const cpf = normalizeDigits(data.get("cpf"));
    const phone = normalizeDigits(data.get("phone"));
    const notes = String(data.get("notes") || "").trim();
    const { firstName, lastName } = splitFullName(fullName);

    return {
      fullName,
      firstName,
      lastName,
      email,
      cpf,
      phone,
      notes,
    };
  };

  const validateBuyerForm = () => {
    if (!customerForm.reportValidity()) return false;
    const buyer = getBuyerData();

    if (!isValidCpf(buyer.cpf)) {
      showStatus("Digite um CPF valido antes de continuar.", "error");
      customerForm.querySelector('input[name="cpf"]')?.focus();
      return false;
    }

    if (buyer.phone.length < 10) {
      showStatus("Digite um WhatsApp valido antes de continuar.", "error");
      customerForm.querySelector('input[name="phone"]')?.focus();
      return false;
    }

    return true;
  };

  const validateShipping = () => {
    if (checkoutState.shippingMode === "pickup") return true;
    if (checkoutState.shippingZip.length !== 8) {
      showStatus("Calcule o frete com um CEP valido antes de continuar.", "error");
      shippingZipInput?.focus();
      return false;
    }
    if (!(checkoutState.shippingAmount > 0)) {
      showStatus("Calcule o frete antes de seguir para o pagamento.", "error");
      return false;
    }
    return true;
  };

  const buildPaymentMeta = (payload) =>
    [
      payload.paymentId ? `<div><span>Pagamento</span><strong>#${payload.paymentId}</strong></div>` : "",
      payload.status ? `<div><span>Status</span><strong>${payload.status}</strong></div>` : "",
      payload.statusDetail ? `<div><span>Detalhe</span><strong>${payload.statusDetail}</strong></div>` : "",
      payload.shippingAmount ? `<div><span>Frete</span><strong>${money.format(payload.shippingAmount)}</strong></div>` : "",
      payload.amount ? `<div><span>Total</span><strong>${money.format(payload.amount)}</strong></div>` : "",
    ].join("");

  const updateStageUi = () => {
    stageEls.forEach((stageEl) => {
      const isActive = stageEl.dataset.stage === checkoutState.currentStage;
      stageEl.hidden = !isActive;
      stageEl.classList.toggle("is-active", isActive);
    });

    stepIndicator?.querySelectorAll("[data-step-target]").forEach((button) => {
      const isActive = button.dataset.stepTarget === checkoutState.currentStage;
      button.classList.toggle("is-active", isActive);
    });
  };

  const updateShippingModeUi = () => {
    shippingModes?.querySelectorAll(".checkout-shipping-option").forEach((label) => {
      const input = label.querySelector('input[name="shippingMode"]');
      label.classList.toggle("active", input?.value === checkoutState.shippingMode);
    });

    if (shippingForm) shippingForm.hidden = checkoutState.shippingMode !== "delivery";
  };

  const updatePaymentUi = () => {
    paymentMethodButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.paymentMethod === checkoutState.paymentMethod);
    });

    paymentPanels.forEach((panel) => {
      panel.hidden = panel.dataset.paymentPanel !== checkoutState.paymentMethod;
    });
  };

  const goToStage = async (stage) => {
    if (stage === "shipping" && !validateBuyerForm()) return;
    if (stage === "payment" && (!validateBuyerForm() || !validateShipping())) return;

    checkoutState.currentStage = stage;
    updateStageUi();

    if (stage === "customer") {
      showStatus("Preencha seus dados para seguir para a entrega.", "neutral");
      return;
    }

    if (stage === "shipping") {
      showStatus("Escolha retirada ou entrega antes de pagar.", "neutral");
      return;
    }

    if (stage === "payment") {
      if (checkoutState.paymentMethod === "pix") {
        showStatus("Clique em gerar Pix para mostrar o QR Code imediatamente.", "ready");
      } else {
        await renderCardPaymentBrick();
      }
    }
  };

  const ensureMercadoPago = async () => {
    if (bricksBuilder) return bricksBuilder;

    const config = await loadCheckoutConfig();
    const mp = new MercadoPago(config.publicKey, { locale: "pt-BR" });
    bricksBuilder = mp.bricks();
    return bricksBuilder;
  };

  const unmountCardBrick = async () => {
    if (cardPaymentBrickController?.unmount) {
      await cardPaymentBrickController.unmount();
    }
    cardPaymentBrickController = null;
    cardBrickRenderedAmount = null;
    cardBrickMountId = null;
    if (cardBrickContainer) cardBrickContainer.innerHTML = "";
  };

  async function renderCardPaymentBrick() {
    if (!cardBrickContainer) return;
    if (!checkoutState.items.length || !checkoutState.orderTotal) return;
    if (isRenderingCardBrick) return;
    if (cardPaymentBrickController && cardBrickRenderedAmount === checkoutState.orderTotal) {
      showStatus("Formulario de cartao pronto. O parcelamento aparece automaticamente.", "ready");
      return;
    }

    cardBrickContainer.hidden = false;
    hideResult();
    updatePaymentUi();
    showStatus("Carregando formulario do cartao...", "loading");
    isRenderingCardBrick = true;

    try {
      await ensureMercadoPago();
      await unmountCardBrick();

      cardBrickMountId = `cardPaymentBrick_mount_${Date.now()}`;
      cardBrickContainer.innerHTML = `<div id="${cardBrickMountId}"></div>`;

      const settings = {
        initialization: {
          amount: checkoutState.orderTotal,
        },
        customization: {
          paymentMethods: {
            maxInstallments: 12,
            minInstallments: 1,
          },
          visual: {
            style: {
              theme: "flat",
              customVariables: {
                baseColor: "#98743b",
                baseColorFirstVariant: "#c8a45d",
                baseColorSecondVariant: "#6f562b",
                buttonTextColor: "#fbfaf7",
                textPrimaryColor: "#151311",
                textSecondaryColor: "rgba(21,19,17,.68)",
                inputBackgroundColor: "#fffdfa",
                formBackgroundColor: "#ffffff",
                outlinePrimaryColor: "rgba(21,19,17,.14)",
                outlineSecondaryColor: "rgba(21,19,17,.08)",
                borderRadiusSmall: "14px",
                borderRadiusMedium: "18px",
                borderRadiusLarge: "22px",
                fontSizeSmall: "14px",
                fontSizeMedium: "16px",
                fontSizeLarge: "18px",
                fontWeightSemiBold: "600",
              },
            },
          },
        },
        callbacks: {
          onReady: () => {
            showStatus("Formulario de cartao pronto. O parcelamento aparece automaticamente.", "ready");
          },
          onSubmit: (formData) => {
            if (!validateBuyerForm()) return Promise.reject(new Error("Dados do comprador invalidos."));
            if (!validateShipping()) return Promise.reject(new Error("Frete nao calculado."));

            showStatus("Enviando pagamento com cartao...", "loading");

            return apiFetch("processPayment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                formData,
                buyer: getBuyerData(),
                cartItems: checkoutState.items.map((item) => ({ id: item.id, qty: item.qty })),
                shipping: {
                  mode: checkoutState.shippingMode,
                  zip: checkoutState.shippingZip,
                },
              }),
            })
              .then(async (response) => {
                const payload = await response.json().catch(() => ({}));
                if (!response.ok) {
                  throw new Error(payload.error || "Nao foi possivel processar o pagamento.");
                }
                return payload;
              })
              .then((payload) => {
                const meta = buildPaymentMeta(payload);
                if (payload.status === "approved") {
                  syncCartUi();
                  showStatus("Pagamento aprovado. Pedido concluido com sucesso.", "success");
                  showResult({
                    title: "Pagamento aprovado",
                    message: "Seu pagamento foi aprovado e o carrinho foi limpo neste navegador.",
                    meta,
                    tone: "success",
                    showBackHome: true,
                  });
                  return;
                }

                showStatus("Pagamento enviado. Confira o resultado e acompanhe o status.", "success");
                showResult({
                  title: "Pagamento em processamento",
                  message: "O Mercado Pago recebeu a solicitacao e retornou um status inicial para o pedido.",
                  meta,
                  tone: "neutral",
                  showBackHome: false,
                });
              })
              .catch((error) => {
                showStatus(error.message || "Erro ao processar o pagamento com cartao.", "error");
                showResult({
                  title: "Nao foi possivel concluir",
                  message: error.message || "Verifique os dados do cartao e tente novamente.",
                  meta: "",
                  tone: "error",
                  showBackHome: false,
                });
                throw error;
              });
          },
          onError: (error) => {
            showStatus(error?.message || "O formulario do cartao encontrou um erro.", "error");
            console.error(error);
          },
        },
      };

      cardPaymentBrickController = await bricksBuilder.create("cardPayment", cardBrickMountId, settings);
      cardBrickRenderedAmount = checkoutState.orderTotal;
    } catch (error) {
      await unmountCardBrick();
      throw error;
    } finally {
      isRenderingCardBrick = false;
    }
  }

  const setPaymentMethod = async (method) => {
    checkoutState.paymentMethod = method;
    hideResult();
    updatePaymentUi();

    if (method === "pix") {
      await unmountCardBrick();
      showStatus("Clique em gerar Pix para mostrar o QR Code imediatamente.", "ready");
      return;
    }

    await renderCardPaymentBrick();
  };

  async function calculateShipping() {
    const zip = normalizeDigits(shippingZipInput?.value || "");
    if (zip.length !== 8) {
      setShippingFeedback("Digite um CEP valido com 8 numeros para calcular.", "error");
      showStatus("Digite um CEP valido para calcular o frete.", "error");
      shippingZipInput?.focus();
      return;
    }

    if (!checkoutState.items.length) {
      setShippingFeedback("Adicione produtos ao carrinho antes de calcular o frete.", "error");
      return;
    }

    checkoutState.shippingMode = "delivery";
    checkoutState.shippingZip = zip;
    setShippingFeedback("Calculando frete...", "loading");

    const response = await apiFetch("shippingQuote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        zip,
        cartItems: checkoutState.items.map((item) => ({ id: item.id, qty: item.qty })),
      }),
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(payload.error || "Nao foi possivel calcular o frete agora.");
    }

    checkoutState.shippingAmount = Number(payload.amount || 0);
    checkoutState.shippingLabel = payload.serviceLabel || money.format(checkoutState.shippingAmount);
    checkoutState.shippingZip = zip;
    renderSummary();
    updateShippingModeUi();
    const optionsText = Array.isArray(payload.options) && payload.options.length
      ? ` Opcoes: ${payload.options.map((option) => `${option.code} ${money.format(option.amount)}`).join(" | ")}.`
      : "";
    setShippingFeedback(
      `${payload.serviceLabel}: ${money.format(payload.amount)}. Prazo estimado: ${payload.estimate}.${optionsText}`,
      "success"
    );
    showStatus("Frete calculado e total atualizado no pedido.", "ready");

    if (checkoutState.currentStage === "payment" && checkoutState.paymentMethod === "card") {
      await renderCardPaymentBrick();
    }
  }

  async function createPixPayment() {
    if (!validateBuyerForm()) return;
    if (!validateShipping()) return;

    hideResult();
    showStatus("Gerando Pix com QR Code...", "loading");

    const response = await apiFetch("processPayment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        selectedPaymentMethod: "pix",
        formData: {
          payment_method_id: "pix",
        },
        buyer: getBuyerData(),
        cartItems: checkoutState.items.map((item) => ({ id: item.id, qty: item.qty })),
        shipping: {
          mode: checkoutState.shippingMode,
          zip: checkoutState.shippingZip,
        },
      }),
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(payload.error || "Nao foi possivel gerar o Pix agora.");
    }
    showStatus(
      isTestMode
        ? "Pix de teste gerado. Esse QR Code nao recebe pagamento real enquanto as credenciais forem TEST."
        : "Pix gerado com sucesso. Escaneie o QR Code ou copie a chave abaixo.",
      isTestMode ? "warning" : "success"
    );
    showResult({
      title: "Pix gerado",
      message: isTestMode
        ? "Seu pedido foi criado em ambiente de teste. Para um QR Code pagavel de verdade, troque Public Key e Access Token para credenciais de producao."
        : "Seu pedido foi criado e o QR Code ja esta pronto para pagamento.",
      meta: buildPaymentMeta(payload),
      pix: payload.pix,
      tone: isTestMode ? "warning" : "neutral",
      showBackHome: false,
    });
  }

  async function initCheckout() {
    if (!catalog.length) {
      showStatus("Nao encontrei o catalogo da loja. Verifique se o script principal foi carregado corretamente.", "error");
      return;
    }

    const order = renderSummary();
    if (!order.items.length || !order.total) return;

    setShippingFeedback("Voce pode retirar no salao sem frete ou calcular a entrega pelo CEP.", "neutral");
    updateShippingModeUi();
    updateStageUi();
    updatePaymentUi();

    try {
      await loadCheckoutConfig();
    } catch (error) {
      showStatus(error.message || "Nao consegui carregar a configuracao do checkout.", "error");
      return;
    }

    showStatus(isTestMode ? testModeMessage : "Preencha seus dados para seguir para a entrega.", isTestMode ? "warning" : "neutral");
  }

  nextStageButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      await goToStage(button.dataset.nextStage);
    });
  });

  prevStageButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      await goToStage(button.dataset.prevStage);
    });
  });

  stepIndicator?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-step-target]");
    if (!button) return;

    const targetStage = button.dataset.stepTarget;
    if (targetStage === "customer") {
      await goToStage("customer");
      return;
    }

    if (targetStage === "shipping" && validateBuyerForm()) {
      await goToStage("shipping");
      return;
    }

    if (targetStage === "payment" && validateBuyerForm() && validateShipping()) {
      await goToStage("payment");
    }
  });

  shippingModes?.addEventListener("change", async (event) => {
    const input = event.target.closest('input[name="shippingMode"]');
    if (!input) return;

    if (input.value === "pickup") {
      checkoutState.shippingMode = "pickup";
      checkoutState.shippingAmount = 0;
      checkoutState.shippingLabel = "Retirada no salao";
      checkoutState.shippingZip = "";
      if (shippingZipInput) shippingZipInput.value = "";
      setShippingFeedback("Voce escolheu retirar no salao. Nao ha cobranca de frete.", "ready");
    } else {
      checkoutState.shippingMode = "delivery";
      checkoutState.shippingAmount = 0;
      checkoutState.shippingLabel = "Calcule o frete";
      setShippingFeedback("Digite o CEP e clique em calcular frete.", "neutral");
    }

    renderSummary();
    updateShippingModeUi();

    if (checkoutState.currentStage === "payment" && checkoutState.paymentMethod === "card") {
      await renderCardPaymentBrick();
    }
  });

  shippingCalcButton?.addEventListener("click", async () => {
    try {
      await calculateShipping();
    } catch (error) {
      setShippingFeedback(error.message || "Nao foi possivel calcular o frete agora.", "error");
      showStatus(error.message || "Nao foi possivel calcular o frete agora.", "error");
    }
  });

  paymentChooser?.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-payment-method]");
    if (!button) return;
    try {
      await setPaymentMethod(button.dataset.paymentMethod);
    } catch (error) {
      showStatus(error.message || "Nao foi possivel carregar a forma de pagamento agora.", "error");
    }
  });

  generatePixButton?.addEventListener("click", async () => {
    try {
      await createPixPayment();
    } catch (error) {
      showStatus(error.message || "Nao foi possivel gerar o Pix agora.", "error");
      showResult({
        title: "Nao foi possivel gerar o Pix",
        message: error.message || "Verifique os dados informados e tente novamente.",
        meta: "",
        tone: "error",
        showBackHome: false,
      });
    }
  });

  initCheckout();
})();
