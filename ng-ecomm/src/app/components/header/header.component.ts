import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <p class="bg-slate-100 px-4 py-3 shadow-md flex justify-between">
      <span>My Store</span>
      <app-primary-button></app-primary-button>
    </p>
  `,
  styles: ``,
})
export class HeaderComponent {}
