import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import moment from "moment/moment";

function Pomodoro() {
  const time = new Date();
  const [timerStarted, setTimerStarted] = useState(false);
  const [isBreak, setIsBreak] = useState(false)
  const [studyTimer, setStudyTimer] = useState({
    studyTime: "00:50:00",
    breakTime: "00:10:00",
  });
  const percentage = 100;

  function startTimer() {
    setTimerStarted(true);

  }
  function countdown() {
    setInterval(() => {
      
    }, interval);
  }
  function stopTimer() {}
  function pauseTimer() {}

  function adjustTimer(type, change) {
    var parsedTime;
    switch (type) {
      case "study":
        parsedTime = moment(studyTimer.studyTime, "HH:mm:ss");
        if (change == "+") {
          parsedTime.add(5, "minutes");
        }
        if (change == "-") {
          parsedTime.add(-5, "minutes");
        }
        setStudyTimer({
          ...studyTimer,
          studyTime: parsedTime.format("HH:mm:ss"),
        });
        break;
      case "break":
        parsedTime = moment(studyTimer.breakTime, "HH:mm:ss");
        if (change == "+") {
          parsedTime.add(1, "minutes");
        }
        if (change == "-") {
          parsedTime.add(-1, "minutes");
        }
        setStudyTimer({
          ...studyTimer,
          breakTime: parsedTime.format("HH:mm:ss"),
        });
        break;
    }
  }

  return (
    <div className="py-10 px-8 bg-slate-300 w-[300px] flex flex-col justify-center items-center rounded-lg m-5">
      <h1 className="text-3xl font-semibold pb-5">Pomdoro Timer</h1>

      {timerStarted && (
        <div className="p-5">
          <CircularProgressbar
            text={`${studyTimer.studyTime}`}
            value={percentage}
          />
        </div>
      )}

      {!timerStarted && (
        <div>
          <div className="flex flex-col items-center">
            <div className="text-lg font-semibold">Focus time (min)</div>
            <div className="flex flex-row gap-4 items-center">
              <button
                className="text-2xl font-bold"
                onClick={() => adjustTimer("study", "-")}
                type="button"
              >
                -
              </button>
              <div className="text-xl font-semibold">
                {studyTimer.studyTime}
              </div>
              <button
                className="text-2xl font-bold"
                onClick={() => adjustTimer("study", "+")}
                type="button"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-lg font-semibold">Break time (min)</div>
            <div className="flex flex-row gap-4 items-center">
              <button
                className="text-2xl font-bold"
                onClick={() => adjustTimer("break", "-")}
                type="button"
              >
                -
              </button>
              <div className="text-xl font-semibold">
                {studyTimer.breakTime}
              </div>
              <button
                className="text-2xl font-bold"
                onClick={() => adjustTimer("break", "+")}
                type="button"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={startTimer}
            className="my-3 px-5 py-2 rounded bg-blue-500 text-slate-200 font-semibold"
          >
            Start Timer
          </button>
        </div>
      )}
    </div>
  );
}

export default Pomodoro;
