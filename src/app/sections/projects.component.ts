import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Category, PROJECTS } from '../data/portfolio.data';
import { IconComponent } from '../shared/icon.component';
import { RevealDirective } from '../shared/reveal.directive';
import { TechChipComponent } from '../shared/tech-chip.component';

type Filter = 'all' | Category;

@Component({
  selector: 'app-projects',
  imports: [IconComponent, RevealDirective, TechChipComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="block" id="projets">
      <div class="wrap split">
        <h2 appReveal>
          Projets
          <small>Applications réalisées ou auxquelles j'ai participé à la SEAAL, et un projet personnel. Ouvrez une ligne pour le détail.</small>
        </h2>
        <div>
          <div class="tools" appReveal>
            <div class="filters" role="group" aria-label="Filtrer les projets">
              @for (f of filters; track f.id) {
                <button type="button" [attr.aria-pressed]="filter() === f.id" (click)="filter.set(f.id)">{{ f.label }}</button>
              }
            </div>
            <div class="tools-r">
              <span aria-live="polite">{{ visible().length }} {{ visible().length > 1 ? 'projets' : 'projet' }}</span>
              <button type="button" class="link" (click)="toggleAll()">
                <app-icon name="expand" /><span>{{ allOpen() ? 'Tout réduire' : 'Tout développer' }}</span>
              </button>
            </div>
          </div>

          <div class="ledger">
            @for (p of visible(); track p.name; let i = $index) {
              <details class="row" appReveal [revealDelay]="i * 60" [attr.data-cat]="p.category"
                       [open]="opened().has(p.name)" (toggle)="onToggle(p.name, $event)">
                <summary>
                  <span class="ic-w"><app-icon [name]="icons[p.category]" /></span>
                  <span class="n">{{ p.name }}</span>
                  <span class="d">{{ p.domain }}</span>
                  <span class="s">{{ p.stackSummary }}</span>
                </summary>
                <div class="body">
                  <p>{{ p.description }}</p>
                  <ul class="chips">
                    @for (t of p.stack; track t) { <li appTechChip [name]="t"></li> }
                  </ul>
                </div>
              </details>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  protected readonly filters: { id: Filter; label: string }[] = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'auto', label: 'Automatisation' },
  ];
  protected readonly icons: Record<Category, string> = { web: 'globe', mobile: 'phone-app', auto: 'cog' };

  protected readonly filter = signal<Filter>('all');
  protected readonly opened = signal<ReadonlySet<string>>(new Set());

  protected readonly visible = computed(() => {
    const f = this.filter();
    return f === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === f);
  });
  protected readonly allOpen = computed(
    () => this.visible().length > 0 && this.visible().every((p) => this.opened().has(p.name)),
  );

  protected onToggle(name: string, event: Event): void {
    const isOpen = (event.target as HTMLDetailsElement).open;
    if (isOpen === this.opened().has(name)) return;
    const next = new Set(this.opened());
    if (isOpen) next.add(name); else next.delete(name);
    this.opened.set(next);
  }

  protected toggleAll(): void {
    const next = new Set(this.opened());
    const shouldOpen = !this.allOpen();
    this.visible().forEach((p) => (shouldOpen ? next.add(p.name) : next.delete(p.name)));
    this.opened.set(next);
  }
}
