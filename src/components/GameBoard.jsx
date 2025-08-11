import { useState } from 'react';

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const GameBoard = ({ activePlayer, onSelectCell }) => {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	const handleSelectSquare = (rowIdx, cellIdx) => {
		if (gameBoard[rowIdx][cellIdx]) return;

		setGameBoard((gameBoard) => {
			const updBoard = [...gameBoard.map((arr) => [...arr])];
			updBoard[rowIdx][cellIdx] = activePlayer;
			return updBoard;
		});
		onSelectCell();
	};

	return (
		<ol id="game-board">
			{initialGameBoard.map((row, rowIdx) => (
				<li key={`r${rowIdx}`}>
					<ol>
						{row.map((cell, cellIdx) => (
							<li key={`c${rowIdx}${cellIdx}`}>
								<button
									type="button"
									onClick={() =>
										handleSelectSquare(rowIdx, cellIdx)
									}
								>
									{gameBoard[rowIdx][cellIdx]}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
};

export default GameBoard;
