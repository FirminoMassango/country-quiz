import "../App.css";
import { questions } from "./Questions";

function Quiz() {
  return (
    <div className="App flex justify-center items-center">
      <div className="w-1/3 bg-white py-10 text-center rounded-lg">
        <h1 className="text-xl text-slate-500 font-bold">
          Kuala Lumpur is the capital of 🇵🇪
        </h1>
        {questions.map((question) => {
          return (
            <div className="m-10 py-3 px-5 border-2 border-indigo-400 hover:text-white hover:bg-yellow-500 hover:border-yellow-500 flex rounded-lg">
              <span className="mr-5 text-base text-indigo-400 hover:white font-semibold">
                {question.answerOptions.position}
              </span>
              <span className="mr-5 text-base text-indigo-400 hover:white font-semibold">
                Vietnam
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Quiz;
