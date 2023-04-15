declare module namespace {
  export interface Child {
    id: string;
    slug: string;
    name: string;
    assets: any[];
  }

  export interface Datum {
    id: string;
    parent_id?: any;
    slug: string;
    name: string;
    description?: any;
    products: number;
    created: number;
    updated: number;
    meta?: any;
    assets: any[];
    children: Child[];
  }

  export interface Links {}

  export interface Pagination {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: Links;
  }

  export interface Meta {
    pagination: Pagination;
  }

  export interface RootObject {
    data: Datum[];
    meta: Meta;
  }
}

export default namespace;
