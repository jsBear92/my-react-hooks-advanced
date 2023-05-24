import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  // this way cannot show current value immediately
  // const handleClick = () => {
  //   setValue(value + 1);
  // };

  // this way can show current value immediately
  //  const handleClick = () => {
  //   setValue((prevValue) => {
  //     const newValue = prevValue + 1;
  //     return newValue;
  //   });
  // }

  // timeout
  const handleClick = () => {
    console.log("Click!");
    setTimeout(() => {
      setValue((prevValue) => {
        const newValue = prevValue + 1;
        return newValue;
      });
      console.log("Clicked!");
    }, 3000);
  }

  return (
    <div>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default UseStateGotcha;
