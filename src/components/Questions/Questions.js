import React from "react";
import { useState, useEffect } from "react";
import Question from "./Question";
import axios from 'axios';

function Questions(){


// /questions?n=1
const [questions, setQuestions] = useState([]);
// Fetching all questions.




useEffect(() => {
     let url = 'http://localhost:8080/questions'

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setQuestions(json)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);


// When we answer a question (useState()) we save the answer and we go to the next one

// return <Question id={} /> /asdasdasdasd

return <div>
    {questions.map( (element) => { return <Question id={element.id}/> })}
</div>



}

export default Questions;