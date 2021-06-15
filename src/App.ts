import { Header } from './components/Header/Header';
import { Router } from './components/Router/Router';
import { Modal } from './components/Modal/Modal';
import { About } from './components/Main/About/About';
import { Score } from './components/Main/Score/Score';
import { Settings } from './components/Main/Settings/Settings';

export const App = () => {
  Header();
  About();
  Score();
  Settings();
  Modal();
  Router();
};
