import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import Player from './components/Player';
import { getWinner } from './winningCombinations';
import GameOver from './components/GameOver';

const deriveActivePlayer = (gameTurns) => {
	let activePlayer = 'X';
	if (gameTurns.length > 0 && gameTurns[0].player === 'X') activePlayer = 'O';

	return activePlayer;
};

const INIT_PLAYERS = {
	X: 'Player 1',
	O: 'Player 2',
};

function App() {
	const [players, setPlayers] = useState(INIT_PLAYERS);
	const [gameTurns, setGameTurns] = useState([]);

	const activePlayer = deriveActivePlayer(gameTurns);
	const winner = getWinner(gameTurns, players);

	const handleSelectSquare = (rowIdx, colIdx) => {
		if (
			gameTurns.find((t) => t.rowIdx === rowIdx && t.colIdx === colIdx) ||
			winner
		)
			return;

		setGameTurns((prevTurns) => {
			const currentPlayer = deriveActivePlayer(prevTurns);
			const newTurns = [
				{ player: currentPlayer, rowIdx, colIdx },
				...prevTurns,
			];
			return newTurns;
		});
	};

	const resetGame = () => {
		setGameTurns([]);
	};

	const handlePlayersChange = (symbol, name) => {
		if (!(symbol in players)) return;
		setPlayers((players) => {
			return { ...players, [symbol]: name };
		});
	};

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						name={INIT_PLAYERS.X}
						symbol="X"
						isActive={activePlayer === 'X'}
						onSave={handlePlayersChange}
					/>
					<Player
						name={INIT_PLAYERS.O}
						symbol="O"
						isActive={activePlayer === 'O'}
						onSave={handlePlayersChange}
					/>
				</ol>
				{winner && <GameOver winner={winner} onReset={resetGame} />}
				<GameBoard
					turns={gameTurns}
					handleSelectSquare={handleSelectSquare}
				/>
			</div>
			<Log gameTurns={gameTurns} />
		</main>
	);
}

export default App;
