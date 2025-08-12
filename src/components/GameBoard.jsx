const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const GameBoard = ({ turns, handleSelectSquare }) => {
	const gameBoard = [...initialGameBoard.map(row => [...row])];
	for (const t of turns) {
		gameBoard[t.rowIdx][t.colIdx] = t.player;
	}

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIdx) => (
				<li key={`r${rowIdx}`}>
					<ol>
						{row.map((cell, cellIdx) => (
							<li key={`c${rowIdx}${cellIdx}`}>
								<button
									type="button"
									onClick={() =>
										handleSelectSquare(rowIdx, cellIdx)
									}
									disabled={cell}
								>
									{cell}
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
