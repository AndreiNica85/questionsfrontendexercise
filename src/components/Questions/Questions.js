import React from "react";
import { useState, useEffect } from "react";
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


console.log(questions);



// When we answer a question (useState()) we save the answer and we go to the next one

// return <Question id={} /> /asdasdasdasd





}

export default Questions;