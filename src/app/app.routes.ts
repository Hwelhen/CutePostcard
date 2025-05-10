import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { SuccessComponent } from './success/success.component';
import { SadComponent } from './sad/sad.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ConfimationVer2Component } from './confimation-ver2/confimation-ver2.component';
import { ConfirmationVer3Component } from './confirmation-ver3/confirmation-ver3.component';

export const routes: Routes = [
    {path: '', component: PageComponent},
    {path: 'success', component: SuccessComponent},
    {path: 'sad', component: SadComponent},
    {path: 'confirmation', component: ConfirmationComponent},
    {path: 'confirmation2', component: ConfimationVer2Component},
    {path: 'confirmation3', component: ConfirmationVer3Component}
];
