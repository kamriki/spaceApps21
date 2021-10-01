/* eslint-disable @typescript-eslint/naming-convention */

export interface Copyright {
  name: string;
  url: string;
}

export interface RowImages {
  items: RowImage[];
  more: boolean;
  page: number;
  per_page: number;
  total: number;
}

export interface RowImage {
  thumb: string;
  observe_date: Date;
}
