import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { acceuilComponent } from './acceuil/acceuil.component';
import { SupportITComponent } from './services/support-it/support-it.component';
import { ServicesComponent } from './services/services.component';
import { AdministrationMicrosoft365Component } from './services/administration-microsoft-365/administration-microsoft-365.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';
import { AdministrationAzureComponent } from './services/administration-azure/administration-azure.component'; // Importation du composant
import { AdministrationSystemeComponent } from './services/administration-systeme/administration-systeme.component';
import { ConsultingCyberSecurityComponent } from './services/consulting-cyber-security/consulting-cyber-security.component';
import { InfrastructuresCloudComponent } from './services/infrastructures-cloud/infrastructures-cloud.component';
import { MicrosoftPowerComponent } from './services/microsoft-power/microsoft-power.component';
import { MicrosoftBiComponent } from './services/microsoft-bi/microsoft-bi.component';
import { PowerAutomateComponent } from './services/power-automate/power-automate.component';
import { SupportApplicatifComponent } from './services/support-applicatif/support-applicatif.component';


export const routes: Routes = [
  { path: '', component: acceuilComponent }, // Route par défaut
  { path: 'welcomePage', component: NavbarComponent },
  { path: 'NousContacter', component: NousContacterComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'acceuil', component: acceuilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'support-it', component: SupportITComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'administration-microsoft-365', component: AdministrationMicrosoft365Component },
  { path: 'administration-azure', component: AdministrationAzureComponent },
  { path: 'administration-systeme', component: AdministrationSystemeComponent },
  { path: 'cyber-consulting', component: ConsultingCyberSecurityComponent },
  { path: 'infrastructures-cloud', component: InfrastructuresCloudComponent },
  { path: 'microsoft-power', component: MicrosoftPowerComponent },
  { path: 'microsoft-bi', component: MicrosoftBiComponent },
  { path: 'power-automate', component: PowerAutomateComponent },
  { path: 'support-applicatif', component: SupportApplicatifComponent },
];