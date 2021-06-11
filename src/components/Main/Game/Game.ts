import { GameLayout } from './GameLayout/GameLayout';
import { Router } from '../../Router/Router';
import { Modal } from '../../Modal/Modal';
import { AddComponent } from '../Main';
import { AppComponent } from './GameComponents/AppComponent';

export const Game = () => {
  AddComponent(GameLayout);

  //  pages
  const aboutContent = document.getElementsByClassName('about-container')[0];
  const scoreContent = document.getElementsByClassName('score-container')[0];
  const settingsContent =
    document.getElementsByClassName('settings-container')[0];
  const gameContent = document.getElementsByClassName(
    'game-container'
  )[0] as HTMLElement;
  if (gameContent) {
    new AppComponent(gameContent).Start();
  }
  const btnRegisrtation = document.getElementsByClassName('btn')[0];
  const arrayContents = [
    aboutContent,
    scoreContent,
    settingsContent,
    gameContent,
  ];

  const ACTIVE_PAGE = 'active';

  const deleteActive = () => {
    arrayContents.forEach((page) => page?.classList.remove(ACTIVE_PAGE));
  };

  const routerExpress = (content: Element | null, button: Element | null) => {
    deleteActive();
    content?.classList.add(ACTIVE_PAGE);
  };

  routerExpress(gameContent, null);

  if (btnRegisrtation) {
    btnRegisrtation.innerHTML = 'Stop game';

    btnRegisrtation.addEventListener('click', () => {
      btnRegisrtation.innerHTML = 'register new player';
      deleteActive();
      routerExpress(aboutContent, null);
      Modal();
      Router();
    });
  }
};
