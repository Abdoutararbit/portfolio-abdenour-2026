import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { resolveTech } from '../data/tech-icons';

/** Pastille d'une technologie : logo (ou icône générique) suivi du nom. Utilisation : <li appTechChip name="Angular"></li> */
@Component({
  selector: 'li[appTechChip]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (icon(); as i) {
      <span class="tk" [style.color]="i.color ?? null">
        <svg [class.ic]="i.kind === 'generic'" viewBox="0 0 24 24" aria-hidden="true"><use [attr.href]="i.href" /></svg>
      </span>
    }
    {{ name() }}
  `,
})
export class TechChipComponent {
  readonly name = input.required<string>();
  protected readonly icon = computed(() => resolveTech(this.name()));
}
