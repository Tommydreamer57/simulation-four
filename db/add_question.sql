INSERT INTO trivia_questions (animal, correct_answer, date_entered, difficulty, question, options)
VALUES ($1, $2, CURRENT_TIMESTAMP, $3, $4, $5)