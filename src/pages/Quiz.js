import { useState } from 'react';
import { Link } from 'react-router-dom';
import quizData from '../data/quiz.json';
import '../App.css';

const Quiz = () => {
	const [current, setCurrent] = useState(0);
	const [selected, setSelected] = useState(null);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [nextAnim, setNextAnim] = useState(false);

	const question = quizData[current];

	const handleOptionClick = (idx) => {
		console.log('Option clicked:', idx);
		setSelected(idx);
	};

	const handleNext = () => {
		setNextAnim(true);
		setTimeout(() => setNextAnim(false), 300);
		if (selected === question.answer) setScore(score + 1);
		setTimeout(() => {
			setSelected(null);
			if (current < quizData.length - 1) {
				setCurrent(current + 1);
			} else {
				setShowResult(true);
			}
		}, 300);
	};

	const handleRestart = () => {
		setCurrent(0);
		setSelected(null);
		setScore(0);
		setShowResult(false);
	};

	return (
		<div className="quiz-background home-background">
			<div className="quiz-container homepage d-flex flex-column align-items-center justify-content-center" style={{minHeight: '100vh'}}>
				<h1 className="mb-4">Rock Quiz</h1>
				<div className="text-center my-3">
					<Link to="/" className="collection-button mx-2">
						Back to Home
					</Link>
				</div>
				{showResult ? (
					<div className="quiz-result card p-4 text-center">
						<h2 className="mb-3">Quiz Complete!</h2>
						<p className="mb-2">Your Score: <strong>{score} / {quizData.length}</strong></p>
						<button className="collection-button mt-3" onClick={handleRestart}>Restart Quiz</button>
					</div>
				) : (
					<div className="quiz-card card p-4">
						<div className="mb-3">
							<span className="badge bg-secondary">Question {current + 1} of {quizData.length}</span>
						</div>
						<h3 className="mb-4">{question.question}</h3>
						<div className="quiz-options d-flex flex-column gap-2">
							{question.options.map((opt, idx) => (
								<button
									key={idx}
									className={`collection-button w-100 text-start quiz-answer-btn${selected === idx ? ' selected-answer' : ''}`}
									onClick={() => handleOptionClick(idx)}
								>
									{opt}
								</button>
							))}
						</div>
						<button
							className={`collection-button mt-4 quiz-next-btn${nextAnim ? ' quiz-next-animate' : ''}`}
							onClick={handleNext}
							disabled={selected === null}
						>
							{current === quizData.length - 1 ? 'Finish' : 'Next'}
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Quiz;
