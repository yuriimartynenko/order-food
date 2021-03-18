export interface IIndexedObject<T = any> {
  [key: string]: T;
}

export type INullableField<T> = T | null

export interface IFoods {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}
