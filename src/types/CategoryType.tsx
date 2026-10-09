export interface MarketType {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface ChangeType {
  dir: string;
  pct: number;
}

export interface categoryType {
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