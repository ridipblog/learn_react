import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./class.css";
import "./TextApp.css";
import DummyText from "./DummyText";
export default function TextApp(props) {
  const [text, setText] = useState("");
  const [char, setChar] = useState(0);
  const [word, setWord] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const changeText = (event) => {
    setText(event.target.value);
    setChar(event.target.value.length);
    var allText = event.target.value;
    const word_len = allText.split(" ");
    setWord(word_len.length);
  };

  //   const convertText = () => {
  //     setText(text.toUpperCase());
  //   };

  const startTimer = () => {
    setIsStart(true);
  };
  const stopTimer = () => {
    setIsStart(false);
    setSeconds(0);
  };
  //   Start Timer Functions

  useEffect(() => {
    let timer;
    if (isStart) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
      console.log("Ok");
    }
    return () => {
      clearInterval(timer);
    };
  }, [isStart]);
  return (
    <>
      <DummyText dummyTextProps={props.dummyTextProps} />
      <div className="flex_div main_div">
        <div className="flex_div result_div">
          <h1 className="heading">{props.TextAppProps.title}</h1>
          <p>Your Total Characters : {char}</p>
          <p>Your Total Words : {word}</p>
          <p>Timer : {seconds}seconds</p>
        </div>
        <div className="flex_div tool_div">
          <textarea
            value={text}
            onChange={changeText}
            placeholder={props.TextAppProps.place}
          ></textarea>
          {/* <button onClick={convertText}>Convert</button> */}
          <div className="flex_div performance_div">
            <div className="flex_div btn_div">
              <button onClick={startTimer}>Start Timer</button>
              <button onClick={stopTimer}>Stop Timer</button>
            </div>
            <div className="flex_div performance_div_1">
              <p>Your Word Per Minute: 0</p>
              <p>Your Accuracy: 0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
TextApp.propTypes = {
  TextAppProps: PropTypes.object,
  name: PropTypes.string,
};
TextApp.defaultProps = {
  dummyTextProps: "Default",
};
