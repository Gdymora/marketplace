import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './components/application/application.component';
import { FormAddCursComponent } from './components/form-add-curs/form-add-curs.component';

const routes: Routes = [
  { path: '', component: ApplicationComponent,},
  { path: 'addcurs', component: FormAddCursComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
