import React, {useEffect} from 'react';

const Button = ({ onClickHandler, children }) => {
  useEffect(()=>{
    console.log(children)
  })
  return <button onClick={onClickHandler}>{children}</button>;
};

export default Button;