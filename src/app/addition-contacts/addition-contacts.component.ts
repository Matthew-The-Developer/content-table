import { Component } from '@angular/core';
import { ContentTableComponent } from '@shared/components/content-table/content-table.component';
import { Column } from '@shared/models/column.model';
import { AdditionContact } from './models/additional-contacts.model';
import { RelationshipType } from './models/relationship-type.enum';

@Component({
  selector: 'app-addition-contacts',
  standalone: true,
  imports: [
    ContentTableComponent
  ],
  templateUrl: './addition-contacts.component.html',
  styleUrl: './addition-contacts.component.scss'
})
export class AdditionContactsComponent {
  displayedColumns = ['name-type', 'relationship', 'phones', 'hippa-compliant', 'actions'];
  columns: Column[] = [
    { label: 'name-type', header: 'Name' },
    { label: 'relationship', header: 'Relationship' },
    { label: 'phones', header: 'Phones' },
    { label: 'hippa-compliant', header: 'HIPPA Compliant' },
    { label: 'actions' },
  ];

  data: AdditionContact[] = [
    {
      name: 'Juley Smith',
      relationship: RelationshipType.Mother,
      phones: [
        { number: '3071237733', isPrimary: true },
        { number: '7272783344', isPrimary: false },
      ],
      hippaCompliant: false,
    }
  ];
}

