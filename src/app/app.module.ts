import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './Common/Components/layout/layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './Common/angular-material/angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorPopupComponent } from './Common/Notifications/error-popup/error-popup.component';
//import { HomeComponent } from './Common/Components/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { ComplaintDetailComponent } from './Common/Components/complaint-detail/complaint-detail.component';
import { ComplaintListComponent } from './Common/Components/complaint-list/complaint-list.component';
import { ComplaintAlinmentComponent } from './Common/Components/complaint-alinment/complaint-alinment.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComplaintListComponent } from './Common/Components/admin-complaint-list/admin-complaint-list.component';
import { AdminAllocationListComponent } from './Common/Components/admin-allocation-list/admin-allocation-list.component';
import { RegisterPopupComponent } from './Common/Components/register-popup/register-popup.component';
//import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { SagentAllocationListComponent } from './Common/Components/sagent-allocation-list/sagent-allocation-list.component';
import { ChangePasswordComponent } from './Common/Components/change-password/change-password.component';
import { ContactPopupComponent } from './Common/Components/contact-popup/contact-popup.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupPopupComponent } from './signup-popup/signup-popup.component';
import { MatNativeDateModule } from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { PolicyComponent } from './policy/policy.component';
//import { TableComponent } from './table/table.component';
import { TableformComponent } from './tableform/tableform.component';
import { GroceryComponent } from './grocery/grocery.component';
import { StoreComponent } from './store/store.component';
import { FormfilterComponent } from './formfilter/formfilter.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegisterformPopupComponent } from './registerform-popup/registerform-popup.component';
import { ServiceformComponent } from './serviceform/serviceform.component';
import { WebloginComponent } from './weblogin/weblogin.component';
import { WebregisterComponent } from './webregister/webregister.component';
import { HeaderComponent } from './header/header.component';
import { WebsignupComponent } from './websignup/websignup.component';
import { WebformregisterComponent } from './webformregister/webformregister.component';
import { HomeComponent } from '../app/home/home.component';
import { HometableComponent } from './hometable/hometable.component';
import { NewloginComponent } from './Common/Components/newlogin/newlogin.component';
import { ApplicantComponent } from './Common/Components/applicant/applicant.component';
import { DemoComponent } from './Common/Components/demo/demo.component';
import { FormComponent } from './Common/Components/form/form.component';







@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ErrorPopupComponent,
    //HomeComponent,
    ComplaintDetailComponent,
    ComplaintListComponent,
    ComplaintAlinmentComponent,
    AdminComplaintListComponent,
    AdminAllocationListComponent,
    RegisterPopupComponent,
    SagentAllocationListComponent,
    ChangePasswordComponent,
    ContactPopupComponent,
    SignUpComponent,
    SignupPopupComponent,
    ProfileComponent,
    PolicyComponent,
   // TableComponent,
    TableformComponent,
   GroceryComponent,
   StoreComponent,
   //FilterComponent,
   FormfilterComponent,
   RegisterComponent,
   LoginComponent,
   RegisterformPopupComponent,
   ServiceformComponent,
   WebloginComponent, 
   WebregisterComponent,
   HeaderComponent,
   WebsignupComponent, 
   WebformregisterComponent, HomeComponent, HometableComponent, NewloginComponent, ApplicantComponent, DemoComponent, FormComponent,
    

  ],
  entryComponents: [
    RegisterPopupComponent,
    ChangePasswordComponent,
    ContactPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ChartsModule,
    HttpClientModule,
    MatNativeDateModule,
    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    // MatPasswordStrengthModule.forRoot(),
    // MatPasswordStrengthModule

    ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
