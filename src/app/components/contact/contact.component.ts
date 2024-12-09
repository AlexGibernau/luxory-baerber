import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
})
export class ContactComponent {
    contactInfo = {
        email: 'ejemplo@luxorybarber.com',
        phone: '+34 123 456 789',
        instagram:
            'https://www.instagram.com/luxory.barber?igsh=bTBhc3RiMDBjMWx4',
    };
}
