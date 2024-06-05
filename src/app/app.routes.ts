import { Routes } from '@angular/router';
import { AdditionContactsComponent } from './addition-contacts/addition-contacts.component';
import { PatientTasksComponent } from './patient-tasks/patient-tasks.component';

export const routes: Routes = [
  { path: 'addition-contacts', component: AdditionContactsComponent },
  { path: 'patient-tasks', component: PatientTasksComponent },
  { path: '**', redirectTo: '/addition-contacts' },
];
