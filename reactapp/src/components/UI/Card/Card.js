import React, { useState, useEffect } from "react";
import Button from "../Button/Button";


const Card = ({ question, setQuestions, setScore }) => {
    

    const onClickHandler = (answer) => {
        if(answer){
            setScore(prev => prev+1);
        }
        setQuestions(prev => prev+1);
    }

    return (
        <div key={question.id} className="card">
            <h4>{question.Question}  </h4>
            <Button children={question.Answers[0].Answer} onClickHandler={onClickHandler} answer={question.Answers[0].isCorrect} />
            <Button children={question.Answers[1].Answer} onClickHandler={onClickHandler} answer={question.Answers[1].isCorrect} />
            <Button children={question.Answers[2].Answer} onClickHandler={onClickHandler} answer={question.Answers[2].isCorrect} />
            <Button children={question.Answers[3].Answer} onClickHandler={onClickHandler} answer={question.Answers[3].isCorrect} />

        </div>
    )
}

export default Card;