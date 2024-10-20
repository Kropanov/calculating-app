import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { Button } from 'primeng/button';

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [PaginatorModule, Button],
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
})
export class FormComponent {
    enteredValue: number = 0;
}
