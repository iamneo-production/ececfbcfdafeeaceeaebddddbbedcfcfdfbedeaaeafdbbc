import React, {useState, useEffect} from "react";
import Button from "../Button/Button";


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
        <Button />
        <Button />
        <Button />
        <Button />
    </div>
)
}

export default Card;