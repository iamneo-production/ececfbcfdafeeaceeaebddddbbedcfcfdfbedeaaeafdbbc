import React from "react";

const Card = ({question}) => {
return(
    <div key = {question.id}>
        <h4>{question.Question}  </h4>
        <Button onclickHandler={}>{question.Answers[0]} </Button>
        <Button>{question.Answers[1]} </Button>
        <Button>{question.Answers[2]} </Button>
        <Button>{question.Answers[3]} </Button>
    </div>
)
}

export default Card;