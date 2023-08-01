import React, { createContext, useState } from 'react';

export const AnswerContext = createContext();

export const AnswerProvider = ({ children }) => {
    const [isAnswer, setIsAnswer] = useState(false);
    const [quizDescription, setQuizDescription] = useState('');
    const [answerContent, setAnswerContent] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <AnswerContext.Provider
            value={{
                isAnswer,
                setIsAnswer,
                quizDescription,
                setQuizDescription,
                answerContent,
                setAnswerContent,
                selectedOption,
                setSelectedOption,
            }}
        >
            {children}
        </AnswerContext.Provider>
    );
};
