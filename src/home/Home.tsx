import React from 'react'
import {ReactComponent as Logo} from '../svgs/hills.svg';

type Props = {
  color?: string
}

export default function Home({color}: Props) {

    return <>
    <Logo fill={color} className="Hills" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      style={{color: color}}
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a></>;
}