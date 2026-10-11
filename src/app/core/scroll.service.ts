import { DOCUMENT } from '@angular/common';
import { Injectable, NgZone, inject, signal } from '@angular/core';

/** Suit le défilement : progression, ombre de l'en-tête, bouton « retour en haut » et section active. */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly doc = inject(DOCUMENT);
  private readonly zone = inject(NgZone);

  readonly progress = signal(0);
  readonly scrolled = signal(false);
  readonly showTop = signal(false);
  readonly active = signal('');

  private ticking = false;

  init(sectionIds: string[]): void {
    const win = this.doc.defaultView;
    if (!win) return;

    this.zone.runOutsideAngular(() => {
      const update = () => {
        const root = this.doc.documentElement;
        const y = win.scrollY;
        const max = root.scrollHeight - root.clientHeight;
        this.progress.set(max > 0 ? Math.min(y / max, 1) : 0);
        this.scrolled.set(y > 8);
        this.showTop.set(y > 700);
        this.ticking = false;
      };
      win.addEventListener('scroll', () => {
        if (!this.ticking) {
          this.ticking = true;
          win.requestAnimationFrame(update);
        }
      }, { passive: true });
      update();

      if ('IntersectionObserver' in win) {
        const spy = new IntersectionObserver(
          (entries) => entries.forEach((e) => e.isIntersecting && this.active.set(e.target.id)),
          { rootMargin: '-35% 0px -60% 0px' },
        );
        sectionIds.forEach((id) => {
          const el = this.doc.getElementById(id);
          if (el) spy.observe(el);
        });
      }
    });
  }

  toTop(): void {
    this.doc.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
