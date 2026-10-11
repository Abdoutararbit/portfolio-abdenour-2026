import { Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/** Fait apparaître l'élément en douceur quand il entre dans l'écran (classes `reveal` puis `in`, voir styles.scss). */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal', '[style.--d]': 'revealDelay() + "ms"' },
})
export class RevealDirective {
  readonly revealDelay = input(0);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement;
      if (!('IntersectionObserver' in window)) {
        node.classList.add('in');
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            node.classList.add('in');
            io.disconnect();
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
      );
      io.observe(node);
    });
  }
}
