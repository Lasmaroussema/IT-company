// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService, ServiceCategory } from '../../services/products.service'; // Assurez-vous que le chemin est correct
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model'; // Importez le modèle Product
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone:true,
  imports:[CommonModule],
  styleUrls: ['./product-list.component.css'] // Ajoutez le fichier de style si nécessaire
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>; // Observable pour la liste des produits
  currentService!: ServiceCategory;  // Catégorie de service actuelle

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Récupérer la catégorie de service depuis l'URL
    this.currentService = this.route.snapshot.paramMap.get('service') as ServiceCategory;

    // Charger les produits pour la catégorie actuelle
    this.products$ = this.productService.getProductsByService(this.currentService);
  }
}