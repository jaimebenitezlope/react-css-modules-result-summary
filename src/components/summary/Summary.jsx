import style from './summary.module.css';

const Summary = ({
	title,
	reactionIcon,
	reactionPhrase,
	reactionNumber,
	reactionNumberAll,
	memoryIcon,
	memoryPhrase,
	memoryNumber,
	memoryNumberAll,
	verbalIcon,
	verbalPhrase,
	verbalNumber,
	verbalNumberAll,
	visualIcon,
	visualNumber,
	visualNumberAll,
	visualPhrase,
	button
}) => {
	return (
		<div className={`${style.summary}`}>
			<div className={`${style.titleDiv}`}>
				<h1 className={style.title}>{title}</h1>
			</div>
			<div className={style.summariesReaction}>
				<div className={`${style.summariesLeft}`}>
					<img
						src={`/images/${reactionIcon}.svg`}
						alt={`${reactionIcon} icon`}
					/>
					<h1 className={style.reactionPhrase}>{reactionPhrase}</h1>
				</div>
				<div className={`${style.summariesRight}`}>
					<h2 className={style.reactionNumber}>{reactionNumber}</h2>
					<h3 className={style.reactionNumberAll}>{reactionNumberAll}</h3>
				</div>
			</div>

			{/* ----- */}

			<div className={style.summariesMemory}>
				<div className={`${style.summariesLeft}`}>
					<img src={`/images/${memoryIcon}.svg`} alt={`${memoryIcon} icon`} />
					<h1 className={style.memoryPhrase}>{memoryPhrase}</h1>
				</div>
				<div className={`${style.summariesRight}`}>
					<h2 className={style.memoryNumber}>{memoryNumber}</h2>
					<h3 className={style.memoryNumberAll}>{memoryNumberAll}</h3>
				</div>
			</div>

			{/* ----- */}

			<div className={style.summariesVerbal}>
				<div className={`${style.summariesLeft}`}>
					<img src={`/images/${verbalIcon}.svg`} alt={`${verbalIcon} icon`} />
					<h1 className={style.verbalPhrase}>{verbalPhrase}</h1>
				</div>
				<div className={`${style.summariesRight}`}>
					<h2 className={style.verbalNumber}>{verbalNumber}</h2>
					<h3 className={style.verbalNumberAll}>{verbalNumberAll}</h3>
				</div>
			</div>

			{/* ----- */}

			<div className={style.summariesVisual}>
				<div className={`${style.summariesLeft}`}>
					<img src={`/images/${visualIcon}.svg`} alt={`${visualIcon} icon`} />
					<h1 className={style.visualPhrase}>{visualPhrase}</h1>
				</div>
				<div className={`${style.summariesRight}`}>
					<h2 className={style.visualNumber}>{visualNumber}</h2>
					<h3 className={style.visualNumberAll}>{visualNumberAll}</h3>
				</div>
			</div>

			<button type='button' className={style.button}>
				{button}
			</button>
		</div>
	);
};

export default Summary;
