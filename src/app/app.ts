import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from "./components/home/home";
import { Products } from "./components/products/products";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  title = 'miro-shop';
}
