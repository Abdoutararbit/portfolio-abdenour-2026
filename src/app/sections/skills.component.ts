import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILLS } from '../data/portfolio.data';
import { IconComponent } from '../shared/icon.component';
import { RevealDirective } from '../shared/reveal.directive';
import { TechChipComponent } from '../shared/tech-chip.component';

@Component({
  selector: 'app-skills',
  imports: [IconComponent, RevealDirective, TechChipComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="block" id="competences">
      <div class="wrap split">
        <h2 appReveal>Compétences<small>Ce que j'utilise au quotidien.</small></h2>
        <dl class="skills">
          @for (g of groups; track g.label; let i = $index) {
            <div appReveal [revealDelay]="i * 50">
              <dt><app-icon [name]="g.icon" />{{ g.label }}</dt>
              <dd>
                <ul class="chips">
                  @for (item of g.items; track item) { <li appTechChip [name]="item"></li> }
                </ul>
              </dd>
            </div>
          }
        </dl>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  protected readonly groups = SKILLS;
}
