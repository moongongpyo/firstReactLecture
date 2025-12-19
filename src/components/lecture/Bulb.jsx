import {useState} from "react";

const Bulb = () => {
  const [light, setLight] = useState("off");
  const onLightClick = () => {
    setLight(light === "off" ? "on" : "off");
  }
  console.log(light);
  return (
      <>
        <div>{light === "on" ?
            <h1 style={{backgroundColor: "orange"}}>ON</h1>
            : <h1 style={{backgroundColor: "grey"}}>OFF</h1>}   </div>
        <button onClick={onLightClick}>{light === "off" ? "켜기" : "끄기"}</button>
      </>
  );
};

export default Bulb;