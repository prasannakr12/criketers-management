import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersService } from './users.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { AddressComponent } from './address/address.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminGuard } from './guards/admin.guard';
import { UnSavedGuard } from './guards/un-saved.guard';
import { ResolveGuard } from './guards/resolve.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'user/:id',
    component: UserComponent,
    canActivateChild: [AdminGuard],
    children: [
      //{ path: '', redirectTo: 'address', pathMatch: 'full' },
      { path: 'address', component: AddressComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  {
    path: 'add-user',
    component: AddUserComponent,
    canDeactivate: [UnSavedGuard],
  },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AboutComponent,
    ContactComponent,
    AddressComponent,
    DetailsComponent,
    HomeComponent,
    ErrorComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [UsersService, AuthGuard, AdminGuard, UnSavedGuard, ResolveGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
