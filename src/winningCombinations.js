export const WINNING_COMBINATIONS = [
	[
		{ row: 0, col: 0 },
		{ row: 0, col: 1 },
		{ row: 0, col: 2 },
	],
	[
		{ row: 1, col: 0 },
		{ row: 1, col: 1 },
		{ row: 1, col: 2 },
	],
	[
		{ row: 2, col: 0 },
		{ row: 2, col: 1 },
		{ row: 2, col: 2 },
	],
	[
		{ row: 0, col: 0 },
		{ row: 1, col: 0 },
		{ row: 2, col: 0 },
	],
	[
		{ row: 0, col: 1 },
		{ row: 1, col: 1 },
		{ row: 2, col: 1 },
	],
	[
		{ row: 0, col: 2 },
		{ row: 1, col: 2 },
		{ row: 2, col: 2 },
	],
	[
		{ row: 0, col: 0 },
		{ row: 1, col: 1 },
		{ row: 2, col: 2 },
	],
	[
		{ row: 0, col: 2 },
		{ row: 1, col: 1 },
		{ row: 2, col: 0 },
	],
];

export const isWin = (gameTurns) => {
	for (const combination of WINNING_COMBINATIONS) {
		const cells = combination.map(
			(cell) =>
				gameTurns.find(
					(t) => t.rowIdx === cell.row && t.colIdx === cell.col
				)?.player ?? null
		);
		if (
			cells[0] &&
			cells[1] &&
			cells[2] &&
			cells[0] === cells[1] &&
			cells[1] === cells[2]
		)
			return true;
	}
	return false;
};

export const getWinner = (gameTurns, players) => {
	const isWon = isWin(gameTurns);
	const isDraw = gameTurns.length === 9 && !isWon;
	const winner = isWon
		? players[gameTurns[0].player]
		: isDraw
		? 'draw'
		: undefined;

	return winner;
};
