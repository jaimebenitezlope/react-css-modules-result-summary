import style from './summary.module.css';

const Summary = ({ title }) => {
	return (
		<div className={`${style.summary}`}>
			<h1 className={style.title}>{title}</h1>
			<div>
				<img src='' alt='' />
				<h2></h2>
				<div></div>
			</div>
		</div>
	);
};

export default Summary;
