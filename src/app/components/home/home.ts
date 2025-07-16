import {Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  @ViewChild('mainContent') mainContent!: ElementRef;
  @ViewChild('afterImage') afterImage!: ElementRef;
  @ViewChild('slider') slider!: ElementRef;

  constructor(private router: Router) {}

  goToProducts() {
    this.router.navigate(['products']);
  }

  scrollToContent() {
    this.mainContent.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  ngAfterViewInit() {
    this.slider.nativeElement.addEventListener('input', (e: Event) => {
      const input = e.target as HTMLInputElement;
      const value = input.value;
      this.afterImage.nativeElement.style.clipPath = `inset(0 ${100 - Number(value)}% 0 0)`;
    });
  }
}
