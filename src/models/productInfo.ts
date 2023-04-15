export interface Price {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
}

export interface Inventory {
  managed: boolean;
  available: number;
}

export interface Seo {
  title?: any;
  description?: any;
}

export interface Conditionals {
  is_active: boolean;
  is_tax_exempt: boolean;
  is_pay_what_you_want: boolean;
  is_inventory_managed: boolean;
  is_sold_out: boolean;
  has_digital_delivery: boolean;
  has_physical_delivery: boolean;
  has_images: boolean;
  collects_fullname: boolean;
  collects_shipping_address: boolean;
  collects_billing_address: boolean;
  collects_extra_fields: boolean;
}

export interface Is {
  active: boolean;
  tax_exempt: boolean;
  pay_what_you_want: boolean;
  inventory_managed: boolean;
  sold_out: boolean;
}

export interface Has {
  digital_delivery: boolean;
  physical_delivery: boolean;
  images: boolean;
}

export interface Collects {
  fullname: boolean;
  shipping_address: boolean;
  billing_address: boolean;
  extra_fields: boolean;
}

export interface CheckoutUrl {
  checkout: string;
  display: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
}

export interface ImageDimensions {
  width: number;
  height: number;
}

export interface Image {
  id: string;
  url: string;
  description?: any;
  is_image: boolean;
  filename: string;
  file_size: number;
  file_extension: string;
  image_dimensions: ImageDimensions;
  meta: any[];
  created_at: number;
  updated_at: number;
}

export interface Price2 {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
}

export interface Option {
  id: string;
  name: string;
  price: Price2;
  assets: any[];
  meta?: any;
  created: number;
  updated: number;
}

export interface VariantGroup {
  id: string;
  name: string;
  meta?: any;
  created: number;
  updated: number;
  options: Option[];
}

export interface ImageDimensions2 {
  width: number;
  height: number;
}

export interface Asset {
  id: string;
  url: string;
  description?: any;
  is_image: boolean;
  filename: string;
  file_size: number;
  file_extension: string;
  image_dimensions: ImageDimensions2;
  meta: any[];
  created_at: number;
  updated_at: number;
}

export interface RootObject {
  id: string;
  created: number;
  updated: number;
  active: boolean;
  permalink: string;
  name: string;
  description: string;
  price: Price;
  inventory: Inventory;
  sku?: any;
  sort_order: number;
  seo: Seo;
  thank_you_url?: any;
  meta?: any;
  conditionals: Conditionals;
  is: Is;
  has: Has;
  collects: Collects;
  checkout_url: CheckoutUrl;
  categories: Category[];
  image: Image;
  extra_fields: any[];
  variant_groups: VariantGroup[];
  assets: Asset[];
  attributes: any[];
  related_products: any[];
}
