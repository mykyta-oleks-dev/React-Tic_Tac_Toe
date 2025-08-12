const GameOver = ({ winner, onReset }) => {
	return (
		<div id="game-over">
			<h2>Game Over!</h2>
			<p>{winner !== 'draw' ? `${winner} won!` : "It's a draw!"}</p>
			<p>
				<button type="button" onClick={onReset}>
					Restart
				</button>
			</p>
		</div>
	);
};

export default GameOver;
