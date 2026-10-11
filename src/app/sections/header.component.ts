import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScrollService } from '../core/scroll.service';
import { ThemeService } from '../core/theme.service';
import { NAV_SECTIONS, PROFILE } from '../data/portfolio.data';
import { IconComponent } from '../shared/icon.component';

@Component({
  selector: 'app-header',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="top" [class.scrolled]="scroll.scrolled()">
      <div class="wrap">
        <a class="brand" href="#accueil">{{ profile.name }}</a>
        <nav aria-label="Navigation principale">
          <ul>
            @for (s of sections; track s.id) {
              <li>
                <a [href]="'#' + s.id" [attr.aria-current]="scroll.active() === s.id ? 'true' : null">{{ s.label }}</a>
              </li>
            }
          </ul>
        </nav>
        <button class="theme" type="button" [attr.aria-pressed]="theme.isDark()" (click)="theme.toggle()">
          <app-icon [name]="theme.isDark() ? 'sun' : 'moon'" />
          <span>{{ theme.isDark() ? 'Mode clair' : 'Mode sombre' }}</span>
        </button>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  protected readonly scroll = inject(ScrollService);
  protected readonly theme = inject(ThemeService);
  protected readonly sections = NAV_SECTIONS;
  protected readonly profile = PROFILE;
}
