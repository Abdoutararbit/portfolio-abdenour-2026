import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { ScrollService } from './core/scroll.service';
import { ToastService } from './core/toast.service';
import { NAV_SECTIONS } from './data/portfolio.data';
import { CertificationsComponent } from './sections/certifications.component';
import { ContactComponent } from './sections/contact.component';
import { EducationComponent } from './sections/education.component';
import { ExperienceComponent } from './sections/experience.component';
import { HeaderComponent } from './sections/header.component';
import { HeroComponent } from './sections/hero.component';
import { ProjectsComponent } from './sections/projects.component';
import { SkillsComponent } from './sections/skills.component';
import { IconComponent } from './shared/icon.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent, HeroComponent, ProjectsComponent, SkillsComponent, ExperienceComponent,
    EducationComponent, CertificationsComponent, ContactComponent, IconComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
})
export class App {
  protected readonly scroll = inject(ScrollService);
  protected readonly toast = inject(ToastService);
  protected readonly year = new Date().getFullYear();

  constructor() {
    afterNextRender(() => this.scroll.init(NAV_SECTIONS.map((s) => s.id)));
  }
}
