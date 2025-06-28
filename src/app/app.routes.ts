import { Routes } from '@angular/router';
import {Notfoundpage} from './components/notfoundpage/notfoundpage';



export const routes: Routes = [
  {path:'',redirectTo:'/process',pathMatch:'full'},
  {
    path:'process',loadChildren:
      ()=>import('./modules/process/process-module').then(e=>e.ProcessModule)
  },
  {path:'**',component:Notfoundpage}
];
