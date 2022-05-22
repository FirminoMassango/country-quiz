type QuestionsType = 
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


export const questions: QuestionsType[] = [
    {
        questionText: "What is the capital of France?",
        answerOptions: [
            {position: "A", answerText: "New York", isCorrect: false},
            {position: "B", answerText: "London", isCorrect: false},
            {position: "c", answerText: "Paris", isCorrect: true},
            {position: "D", answerText: "Bubai", isCorrect: false}
        ]
    },
    {
        questionText: "Who is the CEO of Tesla?",
        answerOptions: [
            {position: "A", answerText: "Jeff Bezos", isCorrect: false},
            {position: "B", answerText: "Ellon Musk", isCorrect: true},
            {position: "C", answerText: "Bill Gates", isCorrect: true},
            {position: "D", answerText: "Tony Stark", isCorrect: false}
        ]
    },
    {
        questionText: "The iPhone was created by which company?",
        answerOptions: [
            {position: "A", answerText: "Apple", isCorrect: true},
            {position: "B", answerText: "Intel", isCorrect: false},
            {position: "C", answerText: "Google", isCorrect: true},
            {position: "D", answerText: "Microsoft", isCorrect: false}
        ]
    }
  
]




