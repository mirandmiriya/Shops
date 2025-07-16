export interface ProductsModell {
  id: number; // ID des Produkts
  name: string; // Name des Produkts
  description: string; // Beschreibung des Produkts
  price: number; //       Preis des Produkts
  stock: number; //        Lagerbestand des Produkts
  type: string; // Typ des Produkts (z.B. "T-Shirt", "Jeans", "Hat", usw.)
  images: string[]; // Array von Bild-URLs für den Produkt-Typ
  availableSizes: string[]; // Array von Größe-Optionen für den Produkt-Typ
  colors: string[]; // Array von Farben für den Produkt-Typ
  inStock: boolean; // Gibt an, ob das Produkt in der Lagerbestand ist
  category: string; // Kategorie des Produkts
  brand: string; // Hersteller des Produkts
  rating: number; // Bewertung des Produkts
}
