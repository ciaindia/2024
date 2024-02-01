import { Routes } from '@angular/router';
import { UserslistingComponent } from './userslisting/userslisting.component';
import { UseraddComponent } from './useradd/useradd.component';
import { UsereditComponent } from './useredit/useredit.component';

export const routes: Routes = [
    {path: 'listing', component: UserslistingComponent},
    {path: 'add', component: UseraddComponent},
    {path: 'edit/:id', component: UsereditComponent},
];
