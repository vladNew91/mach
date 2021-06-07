export const Router = () => {
  //  buttons
  const btnAbout = document.getElementsByClassName('about')[0];
  const btnScore = document.getElementsByClassName('score')[0];
  const btnSettings = document.getElementsByClassName('settings')[0];
  const btnAddUser = document.getElementsByClassName('btn-add-user')[0];
  //  pages
  const aboutContent = document.getElementsByClassName('about-container')[0];
  const scoreContent = document.getElementsByClassName('score-container')[0];
  const settingsContent =
    document.getElementsByClassName('settings-container')[0];
  const gameContent = document.getElementsByClassName('game-container')[0];

  const arrayBtns = [btnAbout, btnScore, btnSettings, btnAddUser];
  const arrayContents = [
    aboutContent,
    scoreContent,
    settingsContent,
    gameContent,
  ];

  const deleteActive = () => {
    arrayBtns.forEach((btn) => btn?.classList.remove('nav-active'));
    arrayContents.forEach((page) => page?.classList.remove('active'));
  };

  const routerExpress = (content: Element | null, button: Element | null) => {
    deleteActive();
    //  active page
    content?.classList.add('active');
    //  active button
    button?.classList.add('nav-active');
  };

  //  router
  btnAbout?.addEventListener('click', () => {
    routerExpress(aboutContent, btnAbout);
  });

  btnScore?.addEventListener('click', () => {
    routerExpress(scoreContent, btnScore);
  });

  btnSettings?.addEventListener('click', () => {
    routerExpress(settingsContent, btnSettings);
  });
};
