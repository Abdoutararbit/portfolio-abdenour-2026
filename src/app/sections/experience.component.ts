import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCE } from '../data/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="block" id="parcours">
      <div class="wrap split">
        <h2 appReveal>Parcours<small>Expérience professionnelle.</small></h2>
        <ol class="timeline">
          @for (e of entries; track e.title + e.org; let i = $index) {
            <li appReveal [revealDelay]="i * 70" [class.now]="e.current">
              <div class="when">{{ e.when }}@if (e.current) { <span class="badge">En cours</span> }</div>
              <h3>{{ e.title }}</h3>
              <p class="org">{{ e.org }}</p>
              @if (e.points?.length) {
                <ul>
                  @for (pt of e.points; track pt) { <li>{{ pt }}</li> }
                </ul>
              }
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  protected readonly entries = EXPERIENCE;
}
