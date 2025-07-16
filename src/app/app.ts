import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home} from "./home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'miro-shop';
}
