import { Routes } from "@angular/router";

import { FooterComponent } from '../components/footer/footer.component'
import { DashboardComponent } from '../dashboard/dashboard.component';
/** importing route guards */
//import { AuthGuard } from "../shared/guards/auth.guard";

export const components = [DashboardComponent];
//export const guards = [AuthGuard]

export const routes : Routes = [
    { path: "dashboard", component: DashboardComponent},
  
];