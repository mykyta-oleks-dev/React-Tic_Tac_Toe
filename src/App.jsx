import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import Player from './components/Player';
import { isWin } from './winningCombinations';
import GameOver from './components/GameOver';

const deriveActivePlayer = (gameTurns) => {
	let activePlayer = 'X';
	if (gameTurns.length > 0 && gameTurns[0].player === 'X') activePlayer = 'O';

	return activePlayer;
};

function App() {
	const [gameTurns, setGameTurns] = useState([]);

	const activePlayer = deriveActivePlayer(gameTurns);
	const isWon = isWin(gameTurns);
	const isDraw = gameTurns.length === 9 && !isWon;
	const winner = isWon ? gameTurns[0].player : isDraw ? 'draw' : undefined;

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

	const resetGame = () => {
		setGameTurns([]);
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
