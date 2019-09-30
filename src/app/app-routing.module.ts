import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileFormComponent } from './profile-form/profile-form.component'



const routes: Routes = [ 
  {path: 'profile', component: UserProfileComponent},
  {path: 'form', component: ProfileFormComponent},

  { path: '', redirectTo:"/profile", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
