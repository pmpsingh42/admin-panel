import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { components, routes } from "./layout.routing";


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule],
  declarations: [components]
})
export class LayoutModule { }