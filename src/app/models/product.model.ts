// product.model.ts
export class Product {
    constructor(
      public id: string,
      public name: string,
      public code: string,
      public price: number,
      public description: string,
      public imageUrl: string,
      public serviceCategory: ServiceCategory,
      public status: 'Disponible' | 'Non disponible' = 'Disponible'
    ) {}
  }
  
  export enum ServiceCategory {
    MICROSOFT_365 = 'Microsoft 365',
    WINDOWS = 'Windows',
    OTHER = 'Autres Services'
  }