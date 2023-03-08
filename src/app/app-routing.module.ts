
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './Common/Components/layout/layout.component';
//import { HomeComponent } from './Common/Components/home/home.component';
import { ComplaintDetailComponent } from './Common/Components/complaint-detail/complaint-detail.component';
import { ComplaintListComponent } from './Common/Components/complaint-list/complaint-list.component';
import { ComplaintAlinmentComponent } from './Common/Components/complaint-alinment/complaint-alinment.component';
import { AdminComplaintListComponent } from './Common/Components/admin-complaint-list/admin-complaint-list.component';
import { AdminAllocationListComponent } from './Common/Components/admin-allocation-list/admin-allocation-list.component';
import { SagentAllocationListComponent } from 'src/app/Common/Components/sagent-allocation-list/sagent-allocation-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupPopupComponent } from './signup-popup/signup-popup.component';
import { ProfileComponent } from './profile/profile.component';
import { PolicyComponent } from './policy/policy.component';
import { TableformComponent } from './tableform/tableform.component';
import { GroceryComponent } from './grocery/grocery.component';
import { StoreComponent } from './store/store.component';
//import { FilterComponent } from './filter/filter.component';
import { FormfilterComponent } from './formfilter/formfilter.component';
import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './login/login.component';
import { RegisterPopupComponent } from './Common/Components/register-popup/register-popup.component';
import { RegisterformPopupComponent } from './registerform-popup/registerform-popup.component';
import { ServiceformComponent } from './serviceform/serviceform.component';
import { WebloginComponent } from './weblogin/weblogin.component';
import { WebregisterComponent } from './webregister/webregister.component';
import { HeaderComponent } from './header/header.component';
import { WebsignupComponent } from './websignup/websignup.component';
import { WebformregisterComponent } from './webformregister/webformregister.component';
import { HomeComponent } from '../app/home/home.component';
import { NewloginComponent } from './Common/Components/newlogin/newlogin.component';
import { ApplicantComponent } from './Common/Components/applicant/applicant.component';
import { table } from 'console';
import { DemoComponent } from './Common/Components/demo/demo.component';
import { FormComponent } from './Common/Components/form/form.component';





const routes: Routes = [

  { path: '', component: LayoutComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component:HomeComponent},
    { path: 'complaint-detail', component: ComplaintDetailComponent},
    { path: 'complaint-list', component: ComplaintListComponent},
    { path: 'complaint-alignment', component: ComplaintAlinmentComponent},
    { path: 'admin-complaint-list', component: AdminComplaintListComponent},
    { path: 'admin-allocation-list', component: AdminAllocationListComponent},
    { path: 'serviceagent-allocation-list', component: SagentAllocationListComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'signup', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup-popup', component: SignupPopupComponent },
    {path: 'weblogin',component:WebloginComponent},
    {path:'webregister',component:WebregisterComponent},
    {path:'websignup',component:WebregisterComponent},
    {path:'webformregister',component:WebformregisterComponent},
    {path:'home',component:HomeComponent},
    {path:'websignup',component:WebsignupComponent},
    
    
    


    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }
