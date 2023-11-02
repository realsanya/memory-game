import React, { FC } from 'react'
import './Counter.css'

interface CounterProps {
    title: string
    counter: number
}

export const Counter: FC<CounterProps> = (props) => {
    const { title, counter } = props

    return (
        <div className="counter-wrapper">
            <span className="counter-title">{title}</span>
            <span className="counter-value">{counter}</span>
        </div>
    )
}
