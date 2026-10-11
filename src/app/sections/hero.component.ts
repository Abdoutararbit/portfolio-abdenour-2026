import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';
import { IconComponent } from '../shared/icon.component';
import { TechChipComponent } from '../shared/tech-chip.component';

@Component({
  selector: 'app-hero',
  imports: [IconComponent, TechChipComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero">
      <div class="wrap">
        <div class="hero-grid">
          <div>
            <h1 class="rise" style="--d: 0ms">{{ p.name }}</h1>
            <p class="role rise" style="--d: 120ms">{{ p.role }}</p>
            <p class="lead rise" style="--d: 220ms">{{ p.intro }}</p>
            <div class="cta rise" style="--d: 320ms">
              <a class="btn primary" href="#projets"><app-icon name="layout" />Voir mes projets</a>
              <a class="btn ghost" [href]="'mailto:' + p.email"><app-icon name="mail" />Écrire un e-mail</a>
              <a class="btn ghost" [href]="p.linkedin" target="_blank" rel="noopener"><app-icon name="linkedin" />Profil LinkedIn</a>
            </div>
          </div>
          <div class="tile rise" style="--d: 180ms">
            @if (p.photo) {
              <img [src]="p.photo" [alt]="'Portrait de ' + p.name" />
            } @else {
              <span role="img" [attr.aria-label]="'Initiales ' + p.initials">{{ p.initials }}</span>
            }
          </div>
        </div>
        <dl class="facts rise" style="--d: 460ms">
          <div><dt><app-icon name="briefcase" />Poste actuel</dt><dd>{{ p.facts.job }}</dd></div>
          <div><dt><app-icon name="cap" />Formation</dt><dd>{{ p.facts.degree }}</dd></div>
          <div>
            <dt><app-icon name="code" />Technologies</dt>
            <dd>
              <ul class="chips">
                @for (t of p.facts.stack; track t) { <li appTechChip [name]="t"></li> }
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  `,
})
export class HeroComponent {
  protected readonly p = PROFILE;
}
