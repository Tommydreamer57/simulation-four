UPDATE trivia-questions
SET animal = $2,
    correct_answer = $3,
    date_entered = CURRENT_TIMESTAMP,
    difficulty = $4,
    question = $5,
    options = $6
WHERE _id = $1