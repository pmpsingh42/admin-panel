import { Routes } from "@angular/router";

import { FooterComponent } from '../components/footer/footer.component'
/** importing route guards */
//import { AuthGuard } from "../shared/guards/auth.guard";

export const components = [FooterComponent];
//export const guards = [AuthGuard]

export const routes : Routes = [
    { path: "dashboard", component: FooterComponent},
  
];