
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from '../../navbar/navbar.component'; // Chemin relatif correct
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-support-it',
  standalone: true,
  imports: [CardModule, ButtonModule, NavbarComponent,FooterComponent],
  templateUrl: './support-it.component.html',
  styleUrl: './support-it.component.css'
})
export class SupportITComponent {

}