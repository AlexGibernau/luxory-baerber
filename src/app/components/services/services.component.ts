import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Service {
    name: string;
    price: number;
    description?: string;
}

@Component({
    imports: [CommonModule],
    selector: 'app-services',
    standalone: true,
    templateUrl: './services.component.html',
    styleUrl: './services.component.css',
})
export class ServicesComponent {
    services: Service[] = [
        {
            name: 'Corte + peinado',
            price: 12,
            description: 'Corte de pelo profesional con acabado y peinado',
        },
        {
            name: 'Corte + peinado + lavado',
            price: 13,
            description: 'Servicio completo incluyendo lavado de cabello',
        },
        {
            name: 'Corte + barba',
            price: 15,
            description: 'Combinado de corte de pelo y arreglo de barba',
        },
        {
            name: 'Corte + cejas',
            price: 13,
            description: 'Corte de pelo con perfilado de cejas',
        },
        {
            name: 'Corte semanal',
            price: 10,
            description: 'Tarifa especial para mantenimiento semanal',
        },
    ];
}
