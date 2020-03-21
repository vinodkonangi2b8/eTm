import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-prepaid",
  templateUrl: "./prepaid.component.html",
  styleUrls: ["./prepaid.component.css"]
})
export class PrepaidComponent implements OnInit {
  operators: string[] = ["Airtel", "Vodafone", "Jio", "Idea", "BSNL", "MTNL"];
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
  constructor() {}

  ngOnInit(): void {}
  step: number = 0;
  setStep(index: number) {
    this.step = index;
  }
}
