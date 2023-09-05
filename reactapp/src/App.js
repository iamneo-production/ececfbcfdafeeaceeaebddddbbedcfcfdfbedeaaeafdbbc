import { React, useState, useEffect } from 'react';
import Card from './components/UI/Card/Card';
import './App.css'


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
    const [score, setScore] = useState(0);

    useEffect(()=>{
        if(questions >=5){
            setIsStart(false);
        }
    })
    const start = ()=>{
        setIsStart(true);
        setQuestions(0);
        setScore(0);
    }

    return (
        <div className='app'>
            {isStart && questions<5 ?
                
                <Card question={Questionbank[questions]} setQuestions={setQuestions} setScore={setScore} />

                : <div>
                    <h1>Quizz App</h1>
                    {questions>=5 ? `You have answered ${score}/5 Correctly` :undefined}
                    <button onClick={start}>Start Quiz</button>
                </div>}
        </div>
    );
}

export default App;