import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  changeLanguage(lang: string) {
    alert(`Language changed to: ${lang}`);
  }
  constructor(private router: Router, private titleService: Title) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const pageTitle = this.getTitleForRoute(event.urlAfterRedirects);
        this.titleService.setTitle(pageTitle);
      }
    });
  }
  private getTitleForRoute(url: string): string {
    switch (url) {
      case '/moving': return 'Moving';
      case '/taxi': return 'Taxi';
      case '/house': return 'House Cleaning';
      case '/deep': return 'Deep Cleaning';
      case '/about': return 'About Us';
      case '/individual': return 'Individual';
      case '/business': return 'Business';
      // Add titles for other routes
      default: return 'About Us';
    }
  }
}
