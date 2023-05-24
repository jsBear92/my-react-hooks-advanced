import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);


  return (
    <div>
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>Toggle</button>
      {showAlert && <div className="alert alert-danger">Toggle is true</div>}
    </div>
  );
};

export default ToggleChallenge;
