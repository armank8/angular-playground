import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: ` <p class="header">Hello {{ title() }}</p> `,
  styles: `
  .header{
    background:rgba(0,0,0,0.5);
    color:black;
    padding:1rem;
  }
  `,
})
export class HeaderComponent {
  title = signal('ng-ecomm-app');
}
