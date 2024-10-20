import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MegaMenuModule } from 'primeng/megamenu';
import { MegaMenuItem } from 'primeng/api';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, MegaMenuModule, HeaderComponent, FormComponent, TableComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {}
