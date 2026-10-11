import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CERTIFICATIONS } from '../data/portfolio.data';
import { IconComponent } from '../shared/icon.component';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-certifications',
  imports: [IconComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="block" id="certifications">
      <div class="wrap split">
        <h2 appReveal>Certifications<small>Chaque carte ouvre le certificat en ligne.</small></h2>
        <ul class="cert-grid">
          @for (c of certs; track c.url; let i = $index) {
            <li appReveal [revealDelay]="i * 70">
              <a class="cert-card" [href]="c.url" target="_blank" rel="noopener">
                <span class="cc-top">
                  @if (c.logo === 'freecodecamp') {
                    <span class="tk big"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#t-freecodecamp" /></svg></span>
                  } @else {
                    <span class="tk big" style="color: #0A66C2"><app-icon name="linkedin" /></span>
                  }
                  <span class="cc-prov"><strong>{{ c.provider }}</strong><span>{{ c.detail }}</span></span>
                </span>
                <span class="cc-title">{{ c.title }}</span>
                <span class="cc-go">
                  Voir le certificat<app-icon name="ext" />
                  <span class="sr">(s'ouvre dans un nouvel onglet)</span>
                </span>
              </a>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class CertificationsComponent {
  protected readonly certs = CERTIFICATIONS;
}
