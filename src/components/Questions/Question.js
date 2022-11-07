import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Answer from "./Answer";

export default function Question(props) {
  const [question, setQuestion] = useState();
  let data = [];

  useEffect(() => {
    let url = "http://localhost:8080/questions/" + props.id;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setQuestion(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  if (question !== undefined) {
    data.push(question);
  }

  return (
    <div>
      {data.map((element) => {
        return <div>
          <div>{element.question}</div>
          <Answer answers={element.answers}/>
        </div>;
      })}
    </div>
  );
}
