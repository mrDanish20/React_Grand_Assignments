import React, { useState } from 'react';

export default function QuizUsingArray() {
    let [radiostate, setRadioState] = useState({});
    let [score, setScore] = useState(0);
    let [rightanswer, setRightAnswer] = useState(0);
    let [wrong, setWrong] = useState(0);
    let [flag, setFlag] = useState(false);

    let Quiz_array = [
        { qno: 1, question: "Who's the founder of Pakistan?", options: ["Quaid -e Azam", "Allama Iqbal", "Modi"], correct: "Quaid -e Azam" },
        { qno: 2, question: "What is the capital of Pakistan?", options: ["Karachi", "Islamabad", "Lahore"], correct: "Islamabad" },
        { qno: 3, question: "In which year did Pakistan gain independence?", options: ["1947", "1950", "1965"], correct: "1947" },
        { qno: 4, question: "Who was the first Prime Minister of Pakistan?", options: ["Liaquat Ali Khan", "Benazir Bhutto", "Nawaz Sharif"], correct: "Liaquat Ali Khan" },
        { qno: 5, question: "Which city is known as the 'City of Lights' in Pakistan?", options: ["Karachi", "Lahore", "Islamabad"], correct: "Karachi" },
        { qno: 6, question: "What is the national language of Pakistan?", options: ["Urdu", "Punjabi", "English"], correct: "Urdu" },
        { qno: 7, question: "Who was the first President of Pakistan?", options: ["Iskander Mirza", "Zulfiqar Ali Bhutto", "Pervez Musharraf"], correct: "Iskander Mirza" },
        { qno: 8, question: "What is the national animal of Pakistan?", options: ["Markhor", "Lion", "Elephant"], correct: "Markhor" },
        { qno: 9, question: "Which mountain is the highest in Pakistan?", options: ["K2", "Nanga Parbat", "Mount Everest"], correct: "K2" },
        { qno: 10, question: "Who was the founder of the All India Muslim League?", options: ["Allama Iqbal", "Muhammad Ali Jinnah", "Syed Ahmad Khan"], correct: "Syed Ahmad Khan" },
        { qno: 11, question: "In which year was Pakistan's constitution adopted?", options: ["1956", "1962", "1973"], correct: "1973" }
    ];

    function getRadioButtonValue(q, r) {
        setRadioState((prev) => ({ ...prev, [q]: r }));
    }

    function QuizLogic() {
        let newScore = 0, newRight = 0, newWrong = 0;

        Quiz_array.forEach((q) => {
            if (radiostate[q.qno] === q.correct) {
                newScore += 5;
                newRight++;
            } else {
                newWrong++;
            }
        });

        setScore(newScore);
        setRightAnswer(newRight);
        setWrong(newWrong);
        setFlag(true);
    }

    return (
        <div className="container mt-4">
           <h1 className="text-center fw-bold " style={{  marginBottom :"30px"}}>Quiz Using Array</h1>
            <div className="card p-4 shadow-lg" style={{ marginLeft: "50px" }}>
                {Quiz_array.map((q) => (
                    <div key={q.qno} className="mb-4" >
                        <h5>{q.qno}. {q.question}</h5>
                        {q.options.map((opt, i) => (
                            <div key={i} className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name={`q${q.qno}`}
                                    value={opt}
                                    onChange={() => getRadioButtonValue(q.qno, opt)}
                                />
                                <label className="form-check-label">{opt}</label>
                            </div>
                        ))}
                    </div>
                ))}
                <button className="btn btn-primary mt-3 w-100" onClick={QuizLogic}>Submit</button>

                {flag && (
                    <div className="mt-4 p-3 bg-light rounded">
                        <h4>Score: <span className="text-primary">{score}</span></h4>
                        <h4>Correct Answers: <span className="text-success">{rightanswer}</span></h4>
                        <h4>Wrong Answers: <span className="text-danger">{wrong}</span></h4>
                    </div>
                )}
            </div>
        </div>
    );
}
