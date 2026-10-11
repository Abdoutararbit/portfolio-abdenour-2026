import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToastService } from '../core/toast.service';
import { PROFILE } from '../data/portfolio.data';
import { IconComponent } from '../shared/icon.component';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [IconComponent, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="block" id="contact">
      <div class="wrap split">
        <h2 appReveal>Contact<small>Disponible pour échanger sur un poste ou un projet.</small></h2>
        <div>
          <a class="mail" appReveal [href]="'mailto:' + p.email">{{ p.email }}</a>
          <div>
            <button type="button" class="copy" (click)="copyEmail()">
              <app-icon name="copy" /><span>Copier l'adresse</span>
            </button>
          </div>
          <ul class="contact-list">
            <li appReveal><span><app-icon name="phone" />Téléphone</span><a [href]="p.phoneHref">{{ p.phone }}</a></li>
            <li appReveal><span><app-icon name="linkedin" />LinkedIn</span><a [href]="p.linkedin" target="_blank" rel="noopener">{{ p.linkedinLabel }}</a></li>
            <li appReveal><span><app-icon name="pin" />Localisation</span>{{ p.location }}</li>
            <li appReveal><span><app-icon name="lang" />Langues</span>{{ p.languages }}</li>
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  protected readonly p = PROFILE;
  private readonly toast = inject(ToastService);

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.p.email);
      this.toast.show('Adresse copiée');
    } catch {
      this.toast.show('Copie impossible : sélectionnez l’adresse');
    }
  }
}
