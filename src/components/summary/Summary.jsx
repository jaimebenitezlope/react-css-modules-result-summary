import style from './summary.module.css';

const Summary = ({ title }) => {
	return (
		<div>
			<h1 className={style.summary}>{title}</h1>
			<div></div>
		</div>
	);
};

export default Summary;
