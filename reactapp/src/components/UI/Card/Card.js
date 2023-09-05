import React from "react";
import Button from "../Button/Button";
import { useEffect } from "react/cjs/react.production.min";

const Card = ({question}) => {

    const onClickHandler =()=>{
console.log("first")
    }
    useEffect(()=>{
        console.log(question);
    })
return(
    <div key = {question.id} className="card">
        <h4>{question.Question}  </h4>
        <button >click </button>
        {/* <Button onClickHandler={onClickHandler} children={question.Answers[0]} />
        <Button onClickHandler={onClickHandler} children={question.Answers[1]} />
        <Button onClickHandler={onClickHandler} children={question.Answers[2]} />
        <Button onClickHandler={onClickHandler} children={question.Answers[3]} /> */}
    </div>
)
}

export default Card;