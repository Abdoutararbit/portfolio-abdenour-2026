import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION } from '../data/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-education',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="block" id="formation">
      <div class="wrap split">
        <h2 appReveal>Formation<small>Diplômes et formations suivies.</small></h2>
        <ol class="timeline">
          @for (e of entries; track e.title; let i = $index) {
            <li appReveal [revealDelay]="i * 70">
              <div class="when">{{ e.when }}</div>
              <h3>{{ e.title }}</h3>
              <p class="org">{{ e.org }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class EducationComponent {
  protected readonly entries = EDUCATION;
}
