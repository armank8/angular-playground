import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <p
      class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"
    >
      <span class="text-xl">My Store</span>
      <app-primary-button
        [label]="'cart(' + cartService.cart().length + ')'"
        (btnClicked)="showButtonClicked()"
      ></app-primary-button>
    </p>
  `,
  styles: ``,
})
export class HeaderComponent {
  showButtonClicked() {
    console.log('clicked');
  }

  cartService = inject(CartService);
}
