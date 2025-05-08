import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [
    {path: '', component: PageComponent},
    {path: 'success', component: SuccessComponent}
];
