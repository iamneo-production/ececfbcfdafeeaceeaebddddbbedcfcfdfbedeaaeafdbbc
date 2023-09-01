import { React, useState } from 'react';
import { Banner } from './components/UI/Banner/Banner';
import Button from './components/UI/Button/Button';
import Button from './components/UI/Button/Button';
import './quizstyle.css'

const App = () => {
    const Questionbank = [
        {
            id: 1,
            Question: "Who is the father of your nation ?",
            Answers: [
                { Answer: "Mahatma Gandhi", isCorrect: true },
                { Answer: "Jawaharlal Nehru", isCorrect: false },
                { Answer: "Donald Trump", isCorrect: false },
                { Answer: "Barrack Obama", isCorrect: false }
            ]
        },
        {
            id: 2,
            Question: "What color is are the leaves?",
            Answers: [
                { Answer: "Blue", isCorrect: false },
                { Answer: "Red", isCorrect: false },
                { Answer: "Yellow", isCorrect: false },
                { Answer: "Green", isCorrect: true }
            ]
        }, {
            id: 3,
            Question: "What color is the sky ",
            Answers: [
                { Answer: "Blue", isCorrect: true },
                { Answer: "Red", isCorrect: false },
                { Answer: "Yellow", isCorrect: false },
                { Answer: "Green", isCorrect: false }
            ]
        },
        {
            id: 4,
            Question: "What color is the sky ?",
            Answers: [
                { Answer: "Blue", isCorrect: true },
                { Answer: "Red", isCorrect: false },
                { Answer: "Yellow", isCorrect: false },
                { Answer: "Green", isCorrect: false }
            ]
        },
        {
            id: 5,
            Question: "What color is the fire ?",
            Answers: [
                { Answer: "Blue", isCorrect: false },
                { Answer: "Red", isCorrect: true },
                { Answer: "Yellow", isCorrect: false },
                { Answer: "Green", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [isStart, setIsStart] = useState(false);
    const [questions, setQuestions] = useState(0);

    return (
        <div className='app'>
            {isStart ?
                <div>
                    <Card question={Questionbank[questions]} />
                </div>
                : <div>
                    <h1>Quizz App</h1>
                    <button onClick={()=> setIsStart(true)}>Start Quiz</button>
                </div>}
        </div>
    );
}

export default App;