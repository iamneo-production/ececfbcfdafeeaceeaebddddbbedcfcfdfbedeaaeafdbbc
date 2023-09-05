import React, {useEffect} from 'react';

const Button = ({ onClickHandler, children, answer }) => {
  useEffect(()=>{
    console.log(children)
  })
  return <button onClick={()=>onClickHandler(answer)}>{children}</button>;
};

export default Button;