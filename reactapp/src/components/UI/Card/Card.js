import React from "react";
import Button from "../Button/Button";

const Card = ({question}) => {

    const onClickHandler =()=>{
console.log("first")
    }
return(
    <div key = {question.id} className="card">
        <h4>{question.Question}  </h4>
        <button >{question.Answers[0]} </button>
        {/* <Button onClickHandler={onClickHandler} children={question.Answers[0]} />
        <Button onClickHandler={onClickHandler} children={question.Answers[1]} />
        <Button onClickHandler={onClickHandler} children={question.Answers[2]} />
        <Button onClickHandler={onClickHandler} children={question.Answers[3]} /> */}
    </div>
)
}

export default Card;