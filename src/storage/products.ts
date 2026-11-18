import AsyncStorage from '@react-native-async-storage/async-storage';

import { Product } from '@/types/Product';

const STORAGE_KEY = '@app-gerenciamento:products';

export async function loadProducts(): Promise<Product[]> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw) as Product[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function saveProducts(products: Product[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}
