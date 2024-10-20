import { Component, inject } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { Button } from 'primeng/button';
import { TableService } from '../table/table.service';

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [PaginatorModule, Button],
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
})
export class FormComponent {
    enteredValue: number = 0;

    tableService = inject(TableService);

    onClick() {
        this.tableService.setQuantity(this.enteredValue);
        this.clearInput();
    }

    clearInput() {
        this.enteredValue = 0;
    }
}
