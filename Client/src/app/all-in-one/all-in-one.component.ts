import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-all-in-one",
  templateUrl: "./all-in-one.component.html",
  styleUrls: ["./all-in-one.component.css"]
})
export class AllInOneComponent implements OnInit {
  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(ser) {
    this.valueChange.emit(ser);
  }
}
