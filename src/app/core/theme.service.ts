import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

type Mode = 'light' | 'dark';
const KEY = 'portfolio-theme';

/** Thème clair/sombre : suit le système tant que la personne n'a pas choisi, puis mémorise son choix. */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly media = this.doc.defaultView?.matchMedia('(prefers-color-scheme: dark)');

  private readonly chosen = signal<Mode | null>(this.read());
  private readonly systemDark = signal(this.media?.matches ?? false);

  readonly isDark = computed(() => (this.chosen() ? this.chosen() === 'dark' : this.systemDark()));

  constructor() {
    this.media?.addEventListener('change', (e) => this.systemDark.set(e.matches));
    effect(() => {
      const mode = this.chosen();
      const root = this.doc.documentElement;
      if (mode) root.setAttribute('data-theme', mode);
      else root.removeAttribute('data-theme');
    });
  }

  toggle(): void {
    const next: Mode = this.isDark() ? 'light' : 'dark';
    this.chosen.set(next);
    try { localStorage.setItem(KEY, next); } catch { /* stockage indisponible : on ignore */ }
  }

  private read(): Mode | null {
    try {
      const v = localStorage.getItem(KEY);
      return v === 'light' || v === 'dark' ? v : null;
    } catch {
      return null;
    }
  }
}
