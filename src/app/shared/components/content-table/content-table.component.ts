import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, ContentChild, TemplateRef, computed, input } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Column } from '@shared/models/column.model';

@Component({
  selector: 'app-content-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    TitleCasePipe
  ],
  templateUrl: './content-table.component.html',
  styleUrl: './content-table.component.scss'
})
export class ContentTableComponent<T> {
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;

  data = input.required<T[]>();
  displayedColumns = input.required<string[]>();
  columns = input.required<Column[]>();

  dataSource = computed(() => {
    const data = this.data();
    return new MatTableDataSource<T>(data);
  });
}
