// navbar.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule for *ngFor
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule,MatMenuModule,MatButtonModule], // <-- Add CommonModule
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // List of services
  services: string[] = [
    'Administration Microsoft 365',
    'Administration Azure',
    'Administration réseau et système',
    'Audit infra IT',
    'Consulting cyber security',
    'Vente licence MS 365',
    'Vente licence Windows',
    'SQL Server',
    'Visio',
    'Étude financière projet infra IT',
    'Support IT',
    'Support applicatif',
    'Migration vers Cloud',
    'Development Power Apps',
    'Development Power Automate',
    'Dashbording Power BI'
  ];

  // Boolean to control dropdown visibility
  isDropdownVisible: boolean = false;

  // Method to show dropdown
  showDropdown(): void {
    this.isDropdownVisible = true;
  }

  // Method to hide dropdown
  hideDropdown(): void {
    this.isDropdownVisible = false;
  }
}

