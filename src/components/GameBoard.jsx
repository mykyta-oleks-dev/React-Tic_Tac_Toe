import { useState } from 'react';

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const GameBoard = () => {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	const handleSelectSquare = (value, rowIdx, cellIdx) => {
		setGameBoard((gameBoard) => {
			const updBoard = [...gameBoard.map((arr) => [...arr])];
			updBoard[rowIdx][cellIdx] = value;
			return updBoard;
		});
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
										handleSelectSquare('X', rowIdx, cellIdx)
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
