import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TableService {
    private products = [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5,
        },
    ];

    constructor() {}

    public getSource() {
        return this.products;
    }

    public setQuantity(value: number) {
        this.products[0].quantity = value;
    }
}
