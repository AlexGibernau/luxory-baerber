import { Component } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { HeaderComponent } from './components/shared/header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        HeaderComponent,
        HomeComponent,
        ServicesComponent,
        ContactComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'luxory-barber';
}
