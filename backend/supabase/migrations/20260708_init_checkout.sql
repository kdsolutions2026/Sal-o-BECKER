create extension if not exists pgcrypto;

create table if not exists public.checkout_orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  external_reference text not null unique,
  payment_id bigint unique,
  status text,
  status_detail text,
  payment_method_id text,
  buyer_name text,
  buyer_email text,
  buyer_cpf text,
  buyer_phone text,
  notes text,
  shipping_mode text not null default 'pickup',
  shipping_zip text,
  shipping_label text,
  subtotal_amount numeric(12, 2) not null default 0,
  shipping_amount numeric(12, 2) not null default 0,
  total_amount numeric(12, 2) not null default 0,
  cart_items jsonb not null default '[]'::jsonb,
  mercado_pago_payload jsonb,
  mercado_pago_response jsonb
);

create table if not exists public.mercadopago_webhooks (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default timezone('utc', now()),
  topic text,
  action text,
  payment_id bigint,
  payload jsonb not null
);

create or replace function public.set_checkout_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists trg_checkout_orders_updated_at on public.checkout_orders;

create trigger trg_checkout_orders_updated_at
before update on public.checkout_orders
for each row
execute function public.set_checkout_updated_at();

create index if not exists idx_checkout_orders_created_at
  on public.checkout_orders (created_at desc);

create index if not exists idx_checkout_orders_status
  on public.checkout_orders (status);

create index if not exists idx_mercadopago_webhooks_created_at
  on public.mercadopago_webhooks (created_at desc);

alter table public.checkout_orders enable row level security;
alter table public.mercadopago_webhooks enable row level security;
