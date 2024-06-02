import Result from './components/result/Result';
import Mobile from './components/mobile/Mobile';
import Summary from './components/summary/Summary';

const App = () => {
	return (
		<>
			<Mobile>
				<Result
					title='Your Result'
					note='76'
					subnote='of 100'
					subtitleBig='Great'
					subtitleSmall='Your performance exceed 65% of the people conducting the test here!'
				/>
				<Summary
					title='Summary'
					reactionIcon=''
					reactionPhrase='Reaction'
					reactionColor='red'
					reactionNumber='80'
				/>
			</Mobile>
		</>
	);
};

export default App;

// memory='Memory'
// verbal='Verbal'
// visual='Visual'
