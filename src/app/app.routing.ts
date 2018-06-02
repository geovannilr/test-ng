import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AddUserComponent} from './add-user/add-user.component';
import {AuthGuard} from './guards';
import {EditUserComponent} from './edit-user/edit-user.component';
import {ViewUserComponent} from './view-user/view-user.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'add-user', component: AddUserComponent},
    { path: 'edit-user', component: EditUserComponent },
    { path: 'view-user', component: ViewUserComponent },
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
