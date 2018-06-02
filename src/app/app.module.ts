import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {RadioButtonModule} from 'primeng/radiobutton';
import {PaginatorModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/growl';
import {CommonModule} from '@angular/common';
import {CheckboxModule} from 'primeng/checkbox';

// used to create fake backend
import {fakeBackendProvider} from './helpers';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AuthGuard} from './guards';
import {JwtInterceptor} from './helpers';
import {AuthenticationService, UserService} from './services';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {ViewUserComponent} from './view-user/view-user.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    TableModule,
    PaginatorModule,
    RadioButtonModule,
    GrowlModule,
    CommonModule,
    CheckboxModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
