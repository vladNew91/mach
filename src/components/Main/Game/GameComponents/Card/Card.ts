import './Card.css';
import { BaseComponent } from '../BaseComponent';

const flip_class = 'flipped';

export class Card extends BaseComponent {
  isFlipped = false;

  constructor(readonly image: string) {
    super('div', ['card-container']);

    this.element.innerHTML = `
        <div class="card">
          <div class="card-front"
            style="background: url('./images/${image}');
            background-position: center;
            background-size: cover;">
          </div>
          <div class="card-back"></div>
        </div>
    `;
  }

  flipToBack() {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront() {
    this.isFlipped = false;
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(flip_class, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}
