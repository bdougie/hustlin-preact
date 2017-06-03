import { h, Component } from 'preact';
import style from './style';
import fetch from 'unfetch'

export default class Home extends Component {
  state = {
    games: null,
    count: 0,
    message: ''
  }

  componentDidMount() {
    fetch('https://jzulvmdhac.execute-api.us-west-1.amazonaws.com/dev/today')
      .then( r => r.json() )
      .then( data => {
        const {count, message, games} = data;
        this.setState({count, message, games})
      });
  }

	render() {
    const {games, message, count} = this.state;
		return (
			<div class={style.home}>
				<h1>Huslin</h1>
        <ul>
          {count > 0 &&
            games.map((game) => (
              <li style={{listStyleType: 'none'}} key={game.id}>
                {game.name} {game.standard_start_time}
              </li>
          ))}
        </ul>
			</div>
		);
	}
}
