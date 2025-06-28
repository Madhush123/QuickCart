import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Context} from './components/context/context';
import {Homepage} from "./components/homepage/homepage";

const routes: Routes = [
  {path:'',redirectTo:'/process/context',pathMatch:'full'},
  {path:'context',component:Context,children:[
      {path:'',redirectTo:'/process/context/home',pathMatch:'full'},
      {path:'home',component:Homepage}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
