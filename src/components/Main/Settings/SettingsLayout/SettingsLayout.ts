import './SettingsLayout.css';

const easyLevel = 4;
const middleLevel = 6;
const hardleLevel = 8;

const AnimalsCards = 'animals';
const CarCards = 'cars';

export const TypeCards = (cards: string) => {
  return cards;
};

export const Level = (level: number) => {
  return level;
};

export const SettingsLayout = `
<div class="settings-container">
    <div>
      <span>
        Game cards
      </span>       

      <div class='complaxity'>
        select game cards type

        <select class='dropdown'>
          <option>${TypeCards(AnimalsCards)}</option>
          <option>${TypeCards(CarCards)}</option>
        </select>
      </div>  
    </div>

    <div>
      <span>
        Difficulty
      </span>       

      <div class='complaxity'>
        select game type

        <select class='dropdown'>
          <option>${Level(easyLevel)}</option>
          <option>${Level(middleLevel)}</option>
          <option>${Level(hardleLevel)}</option>
        </select>
      </div> 
    </div>
</div>
`;
