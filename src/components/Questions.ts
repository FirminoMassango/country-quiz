export type QuestionsType = 
    {
        questionText: string;
        answerOptions: [
            {
                position: string;
                answerText: string;
                isCorrect: boolean;
            },{
                position: string;
                answerText: string;
                isCorrect: boolean;
            },{
                position: string;
                answerText: string;
                isCorrect: boolean;
            },{
                position: string;
                answerText: string;
                isCorrect: boolean;
            }
        ]
        
    }


// export const questions: QuestionsType[] = [
//     {
//         questionText: "What is the capital of France?",
//         answerOptions: [
//             {position: "A", answerText: "New York", isCorrect: false},
//             {position: "B", answerText: "London", isCorrect: false},
//             {position: "c", answerText: "Paris", isCorrect: true},
//             {position: "D", answerText: "Bubai", isCorrect: false}
//         ]
//     },
  
// ]




