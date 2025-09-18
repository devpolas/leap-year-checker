import { useState } from "react";

export default function App() {
  const [leapYear, setLeapYear] = useState(null);
  const [currentYear, setCurrentYear] = useState("");
  const [checkedYear, setCheckedYear] = useState(null);
  const resultClass = "text-center text-sm font-semibold mt-2";

  function handleChange(e) {
    setCurrentYear(e.target.value);
  }

  function handleCheck() {
    const year = parseInt(currentYear);
    if (isNaN(year)) {
      setLeapYear(null);
      setCheckedYear(null);
      return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    setLeapYear(isLeap);
    setCheckedYear(year);
    setCurrentYear("");
  }

  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <h1 className='text-3xl font-bold text-center'>
        Welcome to Leap Year Checker
      </h1>
      <div>
        <fieldset className='fieldset bg-base-300 border-base-300 rounded-box w-xs mt-5 border p-4'>
          <legend className='fieldset-legend text-xl'>Leap Year</legend>
          <input
            type='number'
            className='input'
            placeholder='Enter Year'
            onChange={handleChange}
            value={currentYear}
          />
          {leapYear !== null && checkedYear !== null && (
            <p
              className={`${resultClass} ${
                leapYear ? "text-green-400" : "text-red-400"
              }`}
            >
              {checkedYear} is {leapYear ? "a" : "not a"} leap year!
            </p>
          )}
          <button
            onClick={handleCheck}
            className='btn btn-primary w-1/2 ml-[50%] mt-5'
          >
            Check
          </button>
        </fieldset>
      </div>
    </div>
  );
}
