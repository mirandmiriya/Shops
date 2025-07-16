export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'كنزة شتوية قطن',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/200x200?text=كنزة+1',
  },
  {
    id: 2,
    name: 'كنزة صيفية خفيفة',
    price: 24.50,
    imageUrl: 'https://via.placeholder.com/200x200?text=كنزة+2',
  },
  {
    id: 3,
    name: 'كنزة رياضية',
    price: 34.00,
    imageUrl: 'https://via.placeholder.com/200x200?text=كنزة+3',
  },
];
