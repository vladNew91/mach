import { GameLoop } from './GameLoop/GameLoop';
import { ImageCategoryModel } from '../../../../models/ImageCategoryModel';

export class AppComponent {
  private readonly game: GameLoop;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new GameLoop();
    this.rootElement.appendChild(this.game.element);
  }

  async Start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}
