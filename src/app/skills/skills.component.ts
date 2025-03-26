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
  selectedSkillIndex = 0;
  totalSkills = 10;

  constructor(private themeService: ThemeService) {}

  get isDarkTheme() {
    return this.themeService.isDarkTheme$;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  selectSkill(index: number) {
    this.selectedSkillIndex = index;
  }

  prevSkill() {
    this.selectedSkillIndex = (this.selectedSkillIndex - 1 + this.totalSkills) % this.totalSkills;
  }

  nextSkill() {
    this.selectedSkillIndex = (this.selectedSkillIndex + 1) % this.totalSkills;
  }

  getSkillImage(index: number): string {
    const images = [
      'HTML.png', 'CSS.png', 'Boostrap.png', 'Net.png', 'Javascript.png',
      'SQLServer.png', 'github-logo.png', 'postman.png', 'mongodb.png', 'Figma.png'
    ];
    return `assets/Icons/${images[index]}`;
  }

  getSkillTitle(index: number): string {
    const titles = [
      'HTML', 'CSS', 'Bootstrap', '.NET', 'JavaScript',
      'SQL Server', 'Github', 'Postman', 'MongoDB', 'Figma'
    ];
    return titles[index];
  }

  getSkillDescription(index: number): string {
    const descriptions = [
      'Basic knowledge of HTML tags and structure for web development.',
      'Basic understanding of CSS for creating and styling user interfaces.',
      'Understanding of the Bootstrap framework for responsive web design.',
      'Experience in building Web API, Web MVC and Winform applications.',
      'Knowledge of JavaScript for UI interactions and API integration.',
      'Have basic knowledge of building and administering SQL Server databases.',
      'Basic skills in version control and collaborative software development.',
      'Basic knowledge of API testing using Postman.',
      'Basic understanding of NoSQL database concepts and operations.',
      'Introductory skills in UI/UX design and creating prototypes.'
    ];
    return descriptions[index];
  }
}
