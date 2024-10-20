import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TableService } from './table.service';

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [TableModule],
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss',
})
export class TableComponent {
    constructor(private tableService: TableService) {}

    getValues() {
        return this.tableService.getSource();
    }
}
