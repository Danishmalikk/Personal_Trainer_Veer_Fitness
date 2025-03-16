import React, { useState } from 'react';
import StepperProgress from './StepperProgress'
import BasicCard from './BasicCard'

const quizQuestions = [
  {
    id: 1,
    question: "What is your primary fitness goal?",
    options: [
      { text: "Lose Weight", value: "weight_loss" },
      { text: "Build Muscle", value: "muscle_gain" },
      { text: "Improve Overall Fitness", value: "general_fitness" },
      { text: "Athletic Performance", value: "performance" }
    ]
  },
  {
    id: 2,
    question: "How many days per week can you commit to training?",
    options: [
      { text: "2-3 days", value: "low" },
      { text: "3-4 days", value: "medium" },
      { text: "5-6 days", value: "high" },
      { text: "Every day", value: "very_high" }
    ]
  },
  {
    id: 3,
    question: "What's your current fitness level?",
    options: [
      { text: "Beginner", value: "beginner" },
      { text: "Intermediate", value: "intermediate" },
      { text: "Advanced", value: "advanced" },
      { text: "Professional", value: "professional" }
    ]
  },
  {
    id: 4,
    question: "Do you have any gym experience?",
    options: [
      { text: "No experience", value: "none" },
      { text: "Less than 6 months", value: "beginner" },
      { text: "6-12 months", value: "intermediate" },
      { text: "More than 1 year", value: "experienced" }
    ]
  },
  {
    id: 5,
    question: "What type of training do you prefer?",
    options: [
      { text: "Weight Training", value: "weights" },
      { text: "Bodyweight Exercises", value: "bodyweight" },
      { text: "Cardio", value: "cardio" },
      { text: "Mixed Training", value: "mixed" }
    ]
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const calculateResult = () => {
    // Add your logic to determine the best program based on answers
    return "Personal Training Program";
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Recommended Program
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Based on your answers, we recommend:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-xl font-semibold text-blue-900">
                  {calculateResult()}
                </p>
              </div>
              <button
                onClick={resetQuiz}
                className="inline-block px-8 py-4 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition duration-300 transform hover:scale-105"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {quizQuestions[currentQuestion].question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full p-4 text-left rounded-lg border-2 border-gray-200 
                  hover:border-blue-500 hover:bg-blue-50 transition duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="text-gray-900 font-medium">{option.text}</span>
              </button>
            ))}
          </div>

          {/* Question Counter */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz