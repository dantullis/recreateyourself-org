import { Component } from '@angular/core';

import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
// import { faSun } from '@fortawesome/free-regular-svg-icons';
import {
  faThreads,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

interface Theme {
  id: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  faEllipsis = faEllipsis;
  faThreads = faThreads;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  themes: Theme[] = [
    { id: 'auto', name: 'Auto', icon: 'circle-half' },
    { id: 'light', name: 'Light', icon: 'sun-fill' },
    { id: 'dark', name: 'Dark', icon: 'moon-stars-fill' },
  ];
  currentTheme: Theme = { id: 'auto', name: 'auto', icon: 'circle-half' };

  constructor() {
    const theme = this.themes.find(t => t.id === localStorage.getItem('theme'));
    if (theme) {
      this.currentTheme = theme;
    }
    this.setTheme(this.getPreferredTheme());

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', () => {
        if (
          this.currentTheme.id !== 'light' ||
          this.currentTheme.id !== ('dark' as string)
        ) {
          this.setTheme(this.getPreferredTheme());
        }
      });
  }

  getPreferredTheme(): Theme {
    if (this.currentTheme) {
      return this.currentTheme;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return this.themes.find(t => t.id === 'dark') as Theme;
    } else {
      return this.themes.find(t => t.id === 'light') as Theme;
    }
  }

  setTheme(theme: Theme): void {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme.id);
    if (
      theme.id === 'auto' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme.id);
    }
  }
}
