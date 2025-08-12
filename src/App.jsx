import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import { isWin } from './winningCombinations';

const deriveActivePlayer = (gameTurns) => {
	let activePlayer = 'X';
	if (gameTurns.length > 0 && gameTurns[0].player === 'X') activePlayer = 'O';

	return activePlayer;
};

function App() {
	const [gameTurns, setGameTurns] = useState([]);

	const activePlayer = deriveActivePlayer(gameTurns);
	const isWon = isWin(gameTurns);

	const handleSelectSquare = (rowIdx, colIdx) => {
		if (
			gameTurns.find((t) => t.rowIdx === rowIdx && t.colIdx === colIdx) ||
			isWon
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

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						name="Player 1"
						symbol="X"
						isActive={activePlayer === 'X'}
					/>
					<Player
						name="Player 2"
						symbol="O"
						isActive={activePlayer === 'O'}
					/>
				</ol>
				{isWon && (
					<p>Congratulations, {gameTurns[0].player}, you have won</p>
				)}
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
