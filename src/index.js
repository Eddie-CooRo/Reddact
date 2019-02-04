/** @jsx rEddact.createElement */
import rEddact from '../../rEddact';
import rEddactDOM from '../../rEddactDom';
import data from './data.json';

function TableRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.games}</td>
      <td>{props.wins}</td>
      <td>{props.deals}</td>
      <td>{props.loses}</td>
    </tr>
  );
}
const table = (
  <table className="asia-cup" id="asia-cup">
    <tr>
      <th>Club</th>
      <th>MP</th>
      <th>W</th>
      <th>D</th>
      <th>L</th>
    </tr>
    {data.map(team => (
      <TableRow
        name={team.name}
        games={team.games}
        wins={team.wins}
        deals={team.deals}
        loses={team.loses}
      />
    ))}
  </table>
);

const root = document.getElementById('root');
rEddactDOM.render(table, root);
