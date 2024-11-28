export type RevenueCatEvent = {
  id: string;
  app_id: string;
  event_timestamp_ms: number;
  product_id: string;
  purchased_at_ms: number;
  expiration_at_ms: number;
  store: string;
  environment: string;
  is_trial_conversion: string;
  cancel_reason: string;
  expiration_reason: string;
  new_product_id: string;
  transaction_id: string;
  type: string;
  period_type: string;
  country_code: string;
  price: number;
  price_in_purchased_currency: number;
  tax_percentage: number;
  commission_percentage: number;
  takehome_percentage: number;
  currency: string;
};

export type RevenueCatEventBody = {
  event: RevenueCatEvent;
};
