import React, {useCallback, useEffect, useMemo, useState} from 'react'
import useGameLogic from '../../hooks/useGameLogic'
import { MAX_ATTEMPTS } from '../../constants'
import { getNoun } from '../../utils'
import Card from '../card'
import Counter from '../counter'
import Modal from '../modal'
import './Field.css'

export const Field = () => {
    const { cards, attempts, selectCard, resetGame } = useGameLogic();

    const [isOpen, setIsOpen] = useState(false)

    const toggle = useCallback(() => {
        setIsOpen(false)
        resetGame()
    }, [resetGame])

    const isGameWon = useMemo(() => cards.every(card => card.isSolved), [attempts, cards]);
    const isGameBeaten = attempts === 0 && !isGameWon;

    useEffect(() => {
        setIsOpen(isGameBeaten || isGameWon)
    }, [isGameBeaten, isGameWon])

    return (
        <section className="game-field">
            <Counter title="Сделано ходов" counter={MAX_ATTEMPTS - attempts}/>
                <div className="grid-container">
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            data={card}
                            selectCard={selectCard}
                        />
                    ))}
                </div>
            <Counter title="Осталось попыток" counter={attempts}/>
            <Modal
                isOpen={isOpen}
                title={isGameBeaten ? 'увы, вы проиграли' : 'ура, вы выиграли!'}
                subtitle={isGameBeaten ? 'у вас кончились ходы' : `это заняло ${getNoun(MAX_ATTEMPTS - attempts, ['ход', 'хода', 'ходов'])}`}
                buttonText="сыграть еще"
                onClick={toggle} />
        </section>
    )
}
