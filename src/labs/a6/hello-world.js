import {useSelector} from "react-redux";
import {useState} from "react";
import React from "react";
const HelloWorld = () => {
  const m = useSelector(k => k.h)
  const [n, o] = useState('p');
  const s = {...m, d: n};
  return (
      <>
        <h1>{m.d}</h1>
        <h2>{n}</h2>
        <h3>{s.d}</h3>
        <button onClick={() => o('r')}>Q</button>
      </>
  )
}

export default HelloWorld;