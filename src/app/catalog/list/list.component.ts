import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  // constructor(private route: ActivatedRoute) {}

  cards = [
    {
      id: 1,
      name: "jamais de test"
    },
    {
      id: 2,
      name: "jamais de test"
    },
    {
      id: 3,
      name: "jamais de test"
    },
    {
      id: 4,
      name: "jamais de test"
    },
    {
      id: 5,
      name: "jamais de test"
    },
    {
      id: 6,
      name: "jamais de test"
    },
    {
      id: 7,
      name: "jamais de test"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
