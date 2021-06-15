import './HeaderLayout.css';

export const HeaderLayout = `
<header class='header'>
  <div class='logo'>
    <span class='top-logo'>
      MATCH
    </span>

    <span class='bottom-logo'>
      MATCH
    </span>
  </div>

  <nav class='nav'>
    <a href='#/about' class='nav-item about nav-active'>
      About Game
    </a>

    <a href='#/score' class='nav-item score'>
      <span class='text'>Best Score</span>
    </a>

    <a href='#/settings' class='nav-item settings'>
      Game Settings
    </a>
  </nav>

  <button
    type="button"
    class="btn
    btn-light
    btn-sm
    btn-reg"
  >register new player
  </button>
</header>
`;
