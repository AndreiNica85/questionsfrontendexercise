import React from 'react'
import AnswerElement from './AnswerElement'

export default function Answer(props) {
    let data = props.answers;
    console.log(data)
  return (
    <div>{data.map(el => <AnswerElement answer={el}/>)}</div>
  )
}
