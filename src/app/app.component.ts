import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Alexis";

  meilleur(name) {
    return name + " est le meilleur youtuber !";
  }
}
