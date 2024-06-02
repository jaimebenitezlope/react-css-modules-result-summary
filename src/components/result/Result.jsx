import style from './result.module.css';

const Result = ({ title, note, subnote, subtitleBig, subtitleSmall }) => {
	return (
		<div className={`${style.result}`}>
			<h1 className={style.title}>{title}</h1>
			<div className={style.noteIcon}>
				<h1 className={style.noteTitle}>{note}</h1>
				<h3 className={style.subnote}>{subnote}</h3>
			</div>
			<h2 className={style.subtitleBig}>{subtitleBig}</h2>
			<p className={style.subtitleSmall}>{subtitleSmall}</p>
		</div>
	);
};

export default Result;
