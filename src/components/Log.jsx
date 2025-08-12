const Log = ({ gameTurns }) => {
	return (
		<ol id="log">
			{gameTurns.map((t, idx) => (
				<li key={`${t.rowIdx + 1}${t.colIdx + 1}`}>
					{t.player} selected {t.rowIdx + 1}:{t.colIdx + 1}
				</li>
			))}
		</ol>
	);
};

export default Log;
