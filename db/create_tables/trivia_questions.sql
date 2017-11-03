CREATE TABLE trivia_questions (
    _id SERIAL PRIMARY KEY,
    animal TEXT,
    correct_answer INTEGER,
    date_entered TIMESTAMP,
    difficulty INTEGER,
    question TEXT,
    options TEXT[4]
)