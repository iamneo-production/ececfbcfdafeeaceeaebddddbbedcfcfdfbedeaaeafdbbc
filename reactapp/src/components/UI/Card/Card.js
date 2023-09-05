import React, {useState, useEffect} from "react";
import Button from "../Button/Button";


const Card = ({question}) => {

    const onClickHandler =()=>{
console.log("first")
    }

    useEffect(()=>{
        console.log(question.Answers[0]);
    })
   
return(
    <div key = {question.id} className="card">
        <h4>{question.Question}  </h4>
        <Button children={question.Answers[0].Answer} />
        <Button children={question.Answers[1].Answer} />
        <Button children={question.Answers[2].Answer} />
        <Button children={question.Answers[3].Answer} />
        
    </div>
)
}

export default Card;