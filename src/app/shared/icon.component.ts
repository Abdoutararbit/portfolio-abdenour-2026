import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Icône d'interface, tirée du sprite défini dans index.html (symboles `i-*`). */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use [attr.href]="'#i-' + name()" /></svg>`,
})
export class IconComponent {
  readonly name = input.required<string>();
}
