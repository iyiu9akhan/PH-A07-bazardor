export interface categoryType {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

export interface Product {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: ChangeType;
  markets: MarketType[];
}

export interface ChangeType {
  [key: string]: any;
}

export interface MarketType {
  [key: string]: any;
}
