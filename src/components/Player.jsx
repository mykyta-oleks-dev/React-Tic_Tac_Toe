import { useState } from 'react';

const Player = ({ name, symbol, isActive }) => {
	const [isEditing, setisEditing] = useState(false);
	const [playerName, setPlayerName] = useState(name);

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className="player">
				{!isEditing ? (
					<span className="player-name">{playerName}</span>
				) : (
					<input
						type="text"
						required
						value={playerName}
						onChange={(e) => setPlayerName(e.target.value)}
					/>
				)}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={() => setisEditing(!isEditing)}>
				{!isEditing ? 'Edit' : 'Save'}
			</button>
		</li>
	);
};

export default Player;
