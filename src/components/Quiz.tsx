import "../App.css";
import { QuestionsType } from "./Questions";
import { useState, useEffect } from "react";

function Quiz() {
  const [count, setCount] = useState(0);
  const [countries, setCountries] = useState([]);
  const [isNextButtonEnable, changeNextButtonStatus] = useState(false);
  const [questions, setQuestions] = useState<QuestionsType[]>([
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { position: "A", answerText: "New York", isCorrect: false },
        { position: "B", answerText: "London", isCorrect: false },
        { position: "C", answerText: "Paris", isCorrect: true },
        { position: "D", answerText: "Bubai", isCorrect: false },
      ],
    },
  ]);

  const url = "https://restcountries.com/v2/all";

  async function getCountries() {
    const response = await fetch(url);
    const country_list = await response.json();
    setCountries(country_list.capital);

    country_list.map((country: any) => {
      return console.log(country.name + "|" + country.capital);
    });
  }

  useEffect(() => {
    getCountries();
  }, []);

  function selectedOption(option: string, isCorrect: boolean) {
    changeNextButtonStatus(!isNextButtonEnable);
    // setSelectedOption()
    if (isCorrect) {
      setCount(count + 1);
      console.log(count + 1);

      console.log("Scorred => " + count);
    } else {
      setCount(-1);
      console.log("Scorred => " + count);
    }

    console.log("Option: " + option + " | " + "isCorrent: " + isCorrect);
  }

  function changeQuestions() {
    setQuestions([
      {
        questionText: "Who is the CEO of Tesla?",
        answerOptions: [
          { position: "A", answerText: "Jeff Bezos", isCorrect: false },
          { position: "B", answerText: "Ellon Musk", isCorrect: true },
          { position: "C", answerText: "Bill Gates", isCorrect: false },
          { position: "D", answerText: "Tony Stark", isCorrect: false },
        ],
      },
    ]);

    changeNextButtonStatus(!isNextButtonEnable);
  }

  // [
  // {
  //     questionText: "What is the capital of France?",
  //     answerOptions: [
  //         {position: "A", answerText: "New York", isCorrect: false},
  //         {position: "B", answerText: "London", isCorrect: false},
  //         {position: "c", answerText: "Paris", isCorrect: true},
  //         {position: "D", answerText: "Bubai", isCorrect: false}
  //     ]
  // },
  // {
  //   questionText: "Who is the CEO of Tesla?",
  //   answerOptions: [
  //     { position: "A", answerText: "Jeff Bezos", isCorrect: false },
  //     { position: "B", answerText: "Ellon Musk", isCorrect: true },
  //     { position: "C", answerText: "Bill Gates", isCorrect: true },
  //     { position: "D", answerText: "Tony Stark", isCorrect: false },
  //   ],
  // },
  // {
  //     questionText: "The iPhone was created by which company?",
  //     answerOptions: [
  //         {position: "A", answerText: "Apple", isCorrect: true},
  //         {position: "B", answerText: "Intel", isCorrect: false},
  //         {position: "C", answerText: "Google", isCorrect: true},
  //         {position: "D", answerText: "Microsoft", isCorrect: false}
  //     ]
  // }
  // ];

  return (
    <div className="App flex justify-center items-center">
      <div className="w-1/3 bg-white py-10 text-center rounded-lg">
        <h1 className="text-xl text-slate-500 font-bold">
          Kuala Lumpur is the capital of
        </h1>
        {questions.map((question) => {
          return (
            <div>
              <div
                className="m-10 py-3 px-5 border-2 border-indigo-300 cursor-pointer hover:text-white hover:bg-yellow-500 hover:border-yellow-500 flex rounded-lg"
                onClick={() =>
                  selectedOption(
                    question.answerOptions[0].position,
                    question.answerOptions[0].isCorrect
                  )
                }
              >
                <span className="mr-5 text-base text-indigo-300 hover:white font-semibold">
                  {question.answerOptions[0].position}
                </span>
                <span className="mr-5 text-base text-indigo-300 hover:white font-semibold">
                  {question.answerOptions[0].answerText}
                </span>
              </div>
              <div
                className="m-10 py-3 px-5 border-2 border-indigo-300 cursor-pointer hover:text-white hover:bg-yellow-500 hover:border-yellow-500 flex rounded-lg"
                onClick={() =>
                  selectedOption(
                    question.answerOptions[1].position,
                    question.answerOptions[1].isCorrect
                  )
                }
              >
                <span className="mr-5 text-base text-indigo-300 hover:white font-semibold">
                  {question.answerOptions[1].position}
                </span>
                <span className="mr-5 text-base text-indigo-300 hover:white font-semibold">
                  {question.answerOptions[1].answerText}
                </span>
              </div>
              <div
                className="m-10 py-3 px-5 border-2 border-indigo-300 cursor-pointer hover:text-white hover:bg-yellow-500 hover:border-yellow-500 flex rounded-lg"
                onClick={() =>
                  selectedOption(
                    question.answerOptions[2].position,
                    question.answerOptions[2].isCorrect
                  )
                }
              >
                <span className="mr-5 text-base text-indigo-300 hover:white font-semibold">
                  {question.answerOptions[2].position}
                </span>
                <span className="mr-5 text-base text-indigo-300 hover:white font-semibold">
                  {question.answerOptions[2].answerText}
                </span>
              </div>
              <div
                className="m-10 py-3 px-5 border-2 border-indigo-300 cursor-pointer hover:text-white hover:bg-yellow-500 hover:border-yellow-500 flex rounded-lg"
                onClick={() =>
                  selectedOption(
                    question.answerOptions[3].position,
                    question.answerOptions[3].isCorrect
                  )
                }
              >
                <span className="mr-5 text-base text-indigo-300 hover:white font-semibold">
                  {question.answerOptions[3].position}
                </span>
                <span className="mr-5 text-base text-indigo-300 hover:white font-semibold">
                  {question.answerOptions[3].answerText}
                </span>
              </div>
            </div>
          );
        })}
        {isNextButtonEnable && (
          <button
            className="mt-5 py-2 px-5 bg-gray-500"
            onClick={changeQuestions}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
export default Quiz;
