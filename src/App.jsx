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
					reactionIcon='icon-reaction'
					reactionPhrase='Reaction'
					reactionNumber='80'
					reactionNumberAll='/100'
					memoryIcon='icon-memory'
					memoryPhrase='Memory'
					memoryNumber='92'
					memoryNumberAll='/100'
					verbalIcon='icon-verbal'
					verbalPhrase='Memory'
					verbalNumber='61'
					verbalNumberAll='/100'
					visualIcon='icon-visual'
					visualPhrase='Memory'
					visualNumber='61'
					visualNumberAll='/100'
					button='Continue'
				/>
			</Mobile>
		</>
	);
};

export default App;
