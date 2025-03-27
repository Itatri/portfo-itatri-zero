import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ThemeService]
})
export class HomeComponent {
  // Sự kiện nhấn nút Contact
  showSocialIcons() {
    const socialIcons = document.querySelector('.social-icons') as HTMLElement;
    const contactBtn = document.querySelector('.btn') as HTMLElement;
    
    // Remove existing active states
    socialIcons.classList.remove('active');
    contactBtn.classList.remove('active');
    
    // Force reflow
    void socialIcons.offsetWidth;
    void contactBtn.offsetWidth;
    
    // Add active states
    socialIcons.classList.add('active');
    contactBtn.classList.add('active');

    // Clear any existing timeouts
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }

    // Set new timeout
    this.timeoutId = setTimeout(() => {
        socialIcons.classList.remove('active');
        contactBtn.classList.remove('active');
    }, 2000);
}

private timeoutId: any;

ngOnDestroy() {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
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
