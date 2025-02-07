import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  providers: [ThemeService]
})
export class SkillsComponent {

  // Theme toggle Dark/Light
        constructor(private themeService: ThemeService) {}

        get isDarkTheme() {
          return this.themeService.isDarkTheme$;
        }

        toggleTheme() {
          this.themeService.toggleTheme();
        }
}
