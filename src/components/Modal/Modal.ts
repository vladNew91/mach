import { ModalLayout } from './ModalLayout/ModalLayout';
import { BaseUsers } from '../BaseUsers/BaseUsers';
import { Game } from '../Main/Game/Game';
import { AddComponent } from '../Main/Main';

export const Modal = () => {
  AddComponent(ModalLayout);

  const btnRegisrtation = document.getElementsByClassName('btn')[0];
  const modal = document.getElementsByClassName('modal')[0];
  const playerName = document.getElementsByClassName(
    'form-name'
  )[0] as HTMLInputElement;
  const playerSurname = document.getElementsByClassName(
    'form-sname'
  )[0] as HTMLInputElement;
  const playerEmail = document.getElementsByClassName(
    'form-email'
  )[0] as HTMLInputElement;
  const btnAddUser = document.getElementsByClassName('btn-add-user')[0];
  const modalCancel = document.getElementsByClassName('btn-close-form')[0];
  const tooltip = document.getElementsByClassName('form-tooltip')[0];
  const tooltipEmail = document.getElementsByClassName('form-tooltip-email')[0];

  const btnAddUserActive = () => {
    playerName.classList.contains('valid') &&
    playerSurname.classList.contains('valid') &&
    playerEmail.classList.contains('valid')
      ? btnAddUser?.classList.remove('btn-secondary')
      : btnAddUser?.classList.add('btn-secondary');
  };

  const checkName = () => {
    playerName.value === '' ||
    playerName.value.match(/[~!@#$%*()_—+=|:;"'`<>,.?/^0-9]/g)
      ? (playerName.classList.remove('valid'), tooltip?.classList.add('show'))
      : (playerName.classList.add('valid'), tooltip?.classList.remove('show'));
    btnAddUserActive();
  };

  const checkSurName = () => {
    playerSurname.value === '' ||
    playerSurname?.value.match(/[~!@#$%*()_—+=|:;"'`<>,.?/^0-9]/g)
      ? (playerSurname.classList.remove('valid'),
        tooltip?.classList.add('show'))
      : (playerSurname.classList.add('valid'),
        tooltip?.classList.remove('show'));
    btnAddUserActive();
  };

  const checkMail = () => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    reg.test(playerEmail.value) === false
      ? (playerEmail.classList.remove('valid'),
        tooltipEmail?.classList.add('show'))
      : (playerEmail.classList.add('valid'),
        tooltipEmail?.classList.remove('show'));
    btnAddUserActive();
  };

  const cloceModal = () => {
    const arrayOfINputs = [playerName, playerSurname, playerEmail];
    modal?.classList.remove('show');
    arrayOfINputs.forEach((input) => (input.value = ''));
    checkName();
    checkSurName();
    checkMail();
  };

  btnRegisrtation.addEventListener('click', () => {
    modal?.classList.add('show');
  });

  playerName.addEventListener('keyup', () => {
    checkName();
  });

  playerSurname.addEventListener('keyup', () => {
    checkSurName();
  });

  playerEmail.addEventListener('keyup', () => {
    checkMail();
  });

  btnAddUser?.addEventListener('click', () => {
    if (!btnAddUser?.classList.contains('btn-secondary')) {
      const name = playerName.value;
      const surname = playerSurname.value;
      const email = playerEmail.value;
      BaseUsers(name, surname, email);
      cloceModal();
      Game();
    }
  });

  modalCancel?.addEventListener('click', () => {
    cloceModal();
  });

  window.addEventListener('click', (e) =>
    e.target === modal ? modal?.classList.remove('show') : false
  );
};
