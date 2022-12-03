import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ListPage } from "./list.page";

@NgModule({
  declarations: [ListPage],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild([{ path: '', component: ListPage }])]
})
export default class ListPageModule { }
