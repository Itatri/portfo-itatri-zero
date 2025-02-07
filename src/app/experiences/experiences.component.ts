import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-experiences',
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css',
  providers: [ThemeService]

})
export class ExperiencesComponent {
      // Theme toggle Dark/Light
      constructor(private themeService: ThemeService) {}

      get isDarkTheme() {
        return this.themeService.isDarkTheme$;
      }

      toggleTheme() {
        this.themeService.toggleTheme();
      }
}
