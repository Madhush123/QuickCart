import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Context} from '../process/components/context/context';
import {Homepage} from '../process/components/homepage/homepage';
import {SecurityContext} from './components/security-context/security-context';
import {Login} from './components/login/login';
import {Signup} from './components/signup/signup';
import {ForgotPassword} from './components/forgot-password/forgot-password';
import {OtpVerification} from './components/otp-verification/otp-verification';
import {ResetPassword} from './components/reset-password/reset-password';

const routes: Routes = [
  {path:'',redirectTo:'/security/context',pathMatch:'full'},
  {path:'context',component:SecurityContext,children:[
      {path:'',redirectTo:'/security/context/login',pathMatch:'full'},
      {path:'login',component:Login},
      {path:'signup',component:Signup},
      {path:'forgot-password',component:ForgotPassword},
      {path:'confirm-otp',component:OtpVerification},
      {path:'reset-password',component:ResetPassword}
    ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
