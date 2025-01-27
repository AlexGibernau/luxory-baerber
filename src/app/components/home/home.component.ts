import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Barber {
    id: number;
    name: string;
    image: string;
    description: string;
    booksyUrl: string; // Añadimos la URL de Booksy
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    barbers: Barber[] = [
        {
            id: 1,
            name: 'Álvaro',
            image: 'assets/images/Alvaro.png',
            description: 'Especialista en degradados y cortes modernos',
            booksyUrl:
                'https://booksy.com/es-es/91107_luxory-barber_barberia_49332_cerdanyola-del-valles/staffer/134230#ba_s=seo',
        },
        {
            id: 2,
            name: 'Savy',
            image: 'assets/images/Savy.png',
            description: 'Experto en barbas y estilos clásicos',
            booksyUrl:
                'https://booksy.com/es-es/91107_luxory-barber_barberia_49332_cerdanyola-del-valles/staffer/153928#ba_s=seo',
        },
        {
            id: 3,
            name: 'Grewlyn',
            image: 'assets/images/Grewlyn.png',
            description: 'Experto en estilos modernos',
            booksyUrl:
                'https://booksy.com/es-es/91107_luxory-barber_barberia_49332_cerdanyola-del-valles/staffer/187658#ba_s=seo',
        },
    ];
}
