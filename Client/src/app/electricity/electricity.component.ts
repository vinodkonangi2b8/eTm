import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-electricity",
  templateUrl: "./electricity.component.html",
  styleUrls: ["./electricity.component.css"]
})
export class ElectricityComponent implements OnInit {
  states: string[] = [
    "Andhra Pradesh	",
    "Arunachal Pradesh	",
    "Assam	",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];
  Boards: string[] = [
    "Eastern Power Distribution Company of Andhra Pradesh Ltd. (APEPDCL)",
    "Southern Power Distribution Company of A.P Ltd (APSPDCL)"
  ];
  constructor() {}

  ngOnInit(): void {}

  step: number = 0;
  nextStep() {
    this.step++;
  }
}
