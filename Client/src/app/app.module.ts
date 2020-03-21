import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { GasComponent } from './gas/gas.component';
import { DthComponent } from './dth/dth.component';
import { AllInOneComponent } from './all-in-one/all-in-one.component';

@NgModule({
  declarations: [AppComponent, PrepaidComponent, PostpaidComponent, ElectricityComponent, GasComponent, DthComponent, AllInOneComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
