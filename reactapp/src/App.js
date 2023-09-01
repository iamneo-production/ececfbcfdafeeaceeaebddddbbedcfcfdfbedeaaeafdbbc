import { React, useState } from 'react';
import { Banner } from './components/UI/Banner/Banner';
import Button from './components/UI/Button/Button';
import './quizstyle.css'

const App = () => {
    var Questionbank = [
        {
            Question: "Who is the father of your nation ?",
            Answers: [
                { Answer: "Mahatma Gandhi", isCorrect: true },
                { Answer: "Jawaharlal Nehru", isCorrect: false },
                { Answer: "Donald Trump", isCorrect: false },
                { Answer: "Barrack Obama", isCorrect: false }
            ]
        },
        {
            Question: "What color is are the leaves?",
            Answers: [
                { Answer: "Blue", isCorrect: false },
                { Answer: "Red", isCorrect: false },
                { Answer: "Yellow", isCorrect: false },
                { Answer: "Green", isCorrect: true }
            ]
        }, {
            Question: "What color is the sky ",
            Answers: [
                { Answer: "Blue", isCorrect: true },
                { Answer: "Red", isCorrect: false },
                { Answer: "Yellow", isCorrect: false },
                { Answer: "Green", isCorrect: false }
            ]
        },
        {
            Question: "What color is the sky ?",
            Answers: [
                { Answer: "Blue", isCorrect: true },
                { Answer: "Red", isCorrect: false },
                { Answer: "Yellow", isCorrect: false },
                { Answer: "Green", isCorrect: false }
            ]
        },
        {
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

    return (
        <div className='app'>
            {isStart ?
                <div>
                    <Card />
                </div>
                : <div>
                    <h1>Quizz App</h1>
                    <button onClick={()=> setIsStart(true)}>Start Quiz</button>
                </div>}
        </div>
    );
}

export default App;