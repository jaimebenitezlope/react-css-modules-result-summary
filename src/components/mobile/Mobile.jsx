import style from './mobile.module.css';

const Mobile = ({ children }) => {
	return <div className={style.mobile}>{children}</div>;
};

export default Mobile;
