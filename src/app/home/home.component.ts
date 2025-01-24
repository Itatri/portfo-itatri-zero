import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Sự kiện nhấn nút Contact
  showSocialIcons() {
    const socialIcons = document.querySelector('.social-icons') as HTMLElement;
    socialIcons.classList.add('active');

    setTimeout(() => {
      socialIcons.classList.remove('active');
    }, 2000);
  }

}
