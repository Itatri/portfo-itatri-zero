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

        isRotating = true;
        rotationSpeed = 50;
        selectedSkillIndex = 0;
        totalSkills = 10;

        touchStartX = 0;
        touchEndX = 0;

        constructor(private themeService: ThemeService) {}
        // Theme toggle Dark/Light
        get isDarkTheme() {
          return this.themeService.isDarkTheme$;
        }

        toggleTheme() {
          this.themeService.toggleTheme();
        }

         // Event for roll skills-container
        selectSkill(index: number) {
          this.selectedSkillIndex = index;
          const container = document.querySelector('.skills-container') as HTMLElement;
          const rotation = 36 * index; // 360/10 = 36 độ cho mỗi box
          container.style.transform = `rotateY(-${rotation}deg)`;
        }

        private rotateToSkill() {
          const container = document.querySelector('.skills-container') as HTMLElement;
          const rotation = 36 * this.selectedSkillIndex; // 360/10 = 36 độ cho mỗi box
          container.style.transform = `rotateY(-${rotation}deg)`;
        }

        prevSkill() {
          this.selectedSkillIndex = (this.selectedSkillIndex - 1 + this.totalSkills) % this.totalSkills;
          this.rotateToSkill();
        }

        nextSkill() {
          this.selectedSkillIndex = (this.selectedSkillIndex + 1) % this.totalSkills;
          this.rotateToSkill();
        }


        handleTouchStart(event: TouchEvent) {
          this.touchStartX = event.touches[0].clientX;
        }

        handleTouchEnd(event: TouchEvent) {
          this.touchEndX = event.changedTouches[0].clientX;
          this.handleSwipe();
        }

        private handleSwipe() {
          const swipeThreshold = 50;
          const diff = this.touchEndX - this.touchStartX;

          if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
              this.prevSkill();
            } else {
              this.nextSkill();
            }
          }
        }
}
