// File: src/app/products/products.ts
import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[]; // Array von Bild-URLs für den Produkt-Typ
  availableSizes: string[];
  colors: string[];
  inStock: boolean;
  category: string;
  rating: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
})
export class Products {
  products = signal<Product[]>([
    {
      id: 1,
      name:'V كنزة قطن شكل',
      description: 'كنزة دافئة من القطن الخالص مناسبة لفصل الشتاء.',
      price: 36.99,
      images: [
        'assets/images/TshirtVform.png'
      ],
      availableSizes: ['S', 'M', 'L'],
      colors: ['أسود', 'رمادي'],
      inStock: true,
      category: 'شتوي',
      rating: 4.3,
    },
    {
      id: 2,
      name: 'كنزة بولو قطنية أنيقة وأكمام ضيقة، بتصميم كلاسيكي',
      description: 'كنزة مناسبة للأجواء الدافئة، مريحة وتهوية جيدة.',
      price: 24.5,
      images: [
        'assets/images/TshirtPolo.png',
      ],
      availableSizes: ['M', 'L', 'XL'],
      colors: ['أبيض', 'أزرق'],
      inStock: true,
      category: 'صيفي',
      rating: 4.0,
    },
    {
      id: 3,
      name: 'كنزة بأزرار ولباقة القميص',
      description: 'كنزة مثالية للتمارين والأنشطة اليومية.',
      price: 29.99,
      images: [
        'assets/images/TshirtHemd.jpg'
      ],
      availableSizes: ['S', 'M', 'L', 'XL'],
      colors: ['أحمر', 'أسود', 'أزرق'],
      inStock: false,
      category: 'رياضي',
      rating: 3.8,
    },
  ]);

  currentIndex = signal(0);
  selectedSize = signal<string | undefined>(undefined); // Neues Signal für die ausgewählte Größe

  constructor() {
    // Initialisiert selectedSize, wenn die Komponente geladen wird oder sich currentIndex ändert
    effect(() => {
      const currentProduct = this.products()[this.currentIndex()];
      if (currentProduct && currentProduct.availableSizes.length > 0) {
        this.selectedSize.set(currentProduct.availableSizes[0]); // Setzt die anfängliche Größe auf die erste verfügbare Größe
      } else {
        this.selectedSize.set(undefined);
      }
    });
  }

  // Berechnetes Signal für das aktuelle Bild basierend auf der ausgewählten Größe
  currentImage = computed(() => {
    const currentProduct = this.products()[this.currentIndex()];
    const size = this.selectedSize();

    if (!currentProduct || !size) {
      return ''; // Oder ein Standard-Platzhalterbild
    }

    const sizeIndex = currentProduct.availableSizes.indexOf(size);
    if (sizeIndex !== -1 && currentProduct.images[sizeIndex]) {
      return currentProduct.images[sizeIndex];
    } else {
      // Fallback auf das erste Bild, wenn kein spezifisches Bild für die Größe oder Größe nicht gefunden wurde
      return currentProduct.images[0] || '';
    }
  });

  addToCart(product: Product) {
    console.log('تمت إضافة المنتج:', product.name);
  }

  nextProduct() {
    this.currentIndex.update(
      (current) => (current + 1) % this.products().length
    );
  }

  previousProduct() {
    this.currentIndex.update(
      (current) =>
        (current - 1 + this.products().length) % this.products().length
    );
  }

// Beispiel, WENN du ein <select> oder <input> hättest
onInputChange(event: Event) {
  const value = (event.target as HTMLInputElement).value; // Oder HTMLSelectElement
  // ... weitere Logik
}

}
