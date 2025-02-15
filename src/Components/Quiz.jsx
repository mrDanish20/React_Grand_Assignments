import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Quiz() {
  const [answers, setAnswers] = useState({
    rd1: "",
    rd2: "",
    rd3: "",
    rd4: "",
    rd5: "",
    rd6: "",
    rd7: "",
  });
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [right, setRight] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);

  const questions = [
    {
      id: "rd1",
      question: "1. Who is the Founder of Pakistan?",
      options: ["Allama Iqbal", "Quaid e Azam", "Liaquat Ali Khan"],
      correctAnswer: "Quaid e Azam",
    },
    {
      id: "rd2",
      question: "2. What is the Capital of Pakistan?",
      options: ["Karachi", "Islamabad", "Lahore"],
      correctAnswer: "Islamabad",
    },
    {
      id: "rd3",
      question: "3. Who is the Founder of React?",
      options: ["Jordan Walke", "Mark Zuckerberg"],
      correctAnswer: "Jordan Walke",
    },
    {
      id: "rd4",
      question: "4. What is 3+4?",
      options: ["5", "7"],
      correctAnswer: "7",
    },
    {
      id: "rd5",
      question: "5. What is the largest ocean in the world?",
      options: ["Atlantic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean",
    },
    {
      id: "rd6",
      question: "6. What is the natural satellite of Earth?",
      options: ["Mars", "Moon"],
      correctAnswer: "Moon",
    },
    {
      id: "rd7",
      question: "7. What is the third planet from the Sun?",
      options: ["Venus", "Earth"],
      correctAnswer: "Earth",
    },
  ];

  const calculateQuiz = () => {
    let tempScore = 0;
    let tempRight = 0;
    let tempWrong = 0;

    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        tempScore += 10;
        tempRight++;
      } else {
        tempWrong++;
      }
    });

    setScore(tempScore);
    setRight(tempRight);
    setWrong(tempWrong);
    setShowResults(true);
    setProgress((tempScore * 100) / 70);
  };

  const handleAnswerChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  return (
    <div className="container py-4" style={{ maxWidth: "800px", margin: "auto" }}>
               <h1 className="text-center fw-bold " style={{ marginBottom :"30px"}}>Welcome To Quiz</h1>


      <div className="row g-4">
        {questions.map((q) => (
          <div className="col-md-6" key={q.id}>
            <div className="card shadow-lg p-3" style={{ borderRadius: "12px" }}>
              <h6 className="mb-3" style={{ fontWeight: "600" }}>{q.question}</h6>
              {q.options.map((option, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name={q.id}
                    value={option}
                    checked={answers[q.id] === option}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  />
                  <label className="form-check-label">{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button
        className="btn btn-primary mt-4 w-100 py-2"
        style={{ fontSize: "1.2rem", fontWeight: "600" }}
        onClick={calculateQuiz}
      >
        Submit
      </button>

      {/* Results Section */}
      {showResults && (
        <div
          className="mt-4 p-4 border rounded bg-light shadow"
          style={{ borderRadius: "12px", border: "2px solid #dee2e6" }}
        >
          <h4
            className="text-success mb-3"
            style={{ fontWeight: "bold", textShadow: "1px 1px 2px #d4edda" }}
          >
            Score: {score}
          </h4>
          <h4
            className="text-success mb-3"
            style={{ fontWeight: "bold", textShadow: "1px 1px 2px #d4edda" }}
          >
            Correct Answers: {right}
          </h4>
          <h4
            className="text-danger mb-4"
            style={{ fontWeight: "bold", textShadow: "1px 1px 2px #f8d7da" }}
          >
            Wrong Answers: {wrong}
          </h4>

          {/* Progress Bar */}
          <div
            className="progress mt-3"
            style={{
              height: "25px",
              borderRadius: "15px",
              backgroundColor: "#e9ecef",
              boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{
                width: `${progress}%`,
                transition: "width 0.5s ease-in-out",
                fontWeight: "bold",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {progress.toFixed(2)}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
}