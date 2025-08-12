import { useState } from 'react';

const Player = ({ name, symbol, isActive, onSave }) => {
	const [isEditing, setisEditing] = useState(false);
	const [playerName, setPlayerName] = useState(name);

	const handleClick = () => {
		if (isEditing) onSave(symbol, playerName);
		setisEditing(!isEditing);
	};

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
			<button onClick={handleClick}>
				{!isEditing ? 'Edit' : 'Save'}
			</button>
		</li>
	);
};

export default Player;
