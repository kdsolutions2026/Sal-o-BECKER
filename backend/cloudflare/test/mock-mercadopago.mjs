import http from "node:http";

let lastPayment = null;

const readBody = (request) =>
  new Promise((resolve, reject) => {
    let body = "";
    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });

const server = http.createServer(async (request, response) => {
  response.setHeader("Content-Type", "application/json");

  if (request.method === "POST" && request.url === "/v1/payments") {
    const payload = await readBody(request);
    lastPayment = {
      id: "987654321",
      status: "pending",
      status_detail: "pending_waiting_payment",
      payment_method_id: payload.payment_method_id,
      transaction_amount: payload.transaction_amount,
      external_reference: payload.external_reference,
      point_of_interaction: {
        transaction_data: {
          qr_code: "PIX-CODE-TEST",
          qr_code_base64: "UElYLVRFU1Q=",
        },
      },
    };
    response.end(JSON.stringify(lastPayment));
    return;
  }

  if (request.method === "GET" && request.url?.startsWith("/v1/payments/")) {
    if (!lastPayment) {
      response.statusCode = 404;
      response.end(JSON.stringify({ message: "payment not found" }));
      return;
    }
    response.end(JSON.stringify(lastPayment));
    return;
  }

  response.statusCode = 404;
  response.end(JSON.stringify({ message: "not found" }));
});

server.listen(8788, "127.0.0.1", () => {
  console.log("mock-mercadopago-ready");
});
