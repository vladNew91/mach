import './ScoreLayout.css';

const tableRow = `
  <tr>
    <th></th>
    <td></td>
    <td></td>
    <td></td>
    <td>Score: </td>
  </tr>`;

const TOP_PLAYERS = 10;

const multiplyRow = (element: string) => {
  let res = '';

  for (let i = 1; i <= TOP_PLAYERS; i++) {
    res += element;
  }
  return res;
};

export const ScoreLayout = `
  <div class="score-container">
    <span>Best players:</span><br>
    <table class="table table-primary">
      <thead>
        <tr>
          <th scope="col">Position</th>
          <th scope="col">Icon</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Game points</th>
        </tr>
      </thead>

      <tbody>
        ${multiplyRow(tableRow)}
      </tbody>
    </table>
  </div>`;
