import { Delay } from '../../Shared/Delay';
import { BaseComponent } from '../BaseComponent';
import { Card } from '../Card/Card';
import { CardsField } from '../CardsField/CardsField';

export class GameLoop extends BaseComponent {
  private readonly cardsField: CardsField;
  private activeCard?: Card;
  private isAnimation = false;

  constructor() {
    super();
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]) {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) =>
      card.element.addEventListener('click', () => this.cardHandler(card))
    );

    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image != card.image) {
      await Delay(2000);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    }
    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
