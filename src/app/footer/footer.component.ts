import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [ThemeService]
})
export class FooterComponent {
  // Event scroll to top of page
  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


   // Theme toggle Dark/Light
    constructor(private themeService: ThemeService) {}

    get isDarkTheme() {
      return this.themeService.isDarkTheme$;
    }

    toggleTheme() {
      this.themeService.toggleTheme();
    }
}
