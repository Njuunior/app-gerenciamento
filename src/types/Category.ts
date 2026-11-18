export enum Category {
  STATIONERY = 'stationery',
  ELECTRONIC = 'electronic',
  CLEANING = 'cleaning',
}

export const CATEGORY_LABELS: Record<Category, string> = {
  [Category.STATIONERY]: 'Papelaria',
  [Category.ELECTRONIC]: 'Eletrônicos',
  [Category.CLEANING]: 'Limpeza',
};

export const CATEGORIES = Object.values(Category);
