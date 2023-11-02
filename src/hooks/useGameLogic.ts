import { useCallback, useEffect,  useState } from 'react'

import { data, MAX_ATTEMPTS, TIMEOUT } from '../constants'
import { shuffle } from '../utils'

let timeoutId: number | undefined

const useGameLogic = () => {
    const [cards, setCards] = useState<TCard[]>([])
    const [selectedCards, setSelectedCards] = useState<TCard[]>([])
    const [attempts, setAttempts] = useState(MAX_ATTEMPTS)

    const selectCard = useCallback((id: CardId) => {
        const selectedCardIdx = cards.findIndex(card => card.id === id)

        if (selectedCardIdx !== -1) {
            const newCards = [...cards]
            const selectedCard = newCards[selectedCardIdx]
            newCards[selectedCardIdx] = { ...selectedCard, isOpened: true }

            setCards(newCards)
            setSelectedCards(prev => [...prev, selectedCard])
            setAttempts(prev => prev - 1)
        }
    }, [cards, selectedCards])

    const resetGame = useCallback(() => {
        const shuffledData = shuffle<TCard>(data)
        setCards([...shuffledData])
        setAttempts(MAX_ATTEMPTS)
    }, [])

    const closeCards = useCallback(() => {
        const [firstCard, secondCard] = selectedCards

        setCards(cards.map(card => (card.id === firstCard.id || card.id === secondCard.id)
            ? ({ ...card, isOpened: false })
            : card)
        )

        if (selectedCards.length === 2) {
            setSelectedCards([])
        } else {
            setSelectedCards(selectedCards.slice(2))
        }

        clearTimeout(timeoutId);
        timeoutId = undefined
    }, [selectedCards, cards])

    const resolveCards = useCallback(() => {
        const [firstCard] = selectedCards

        setCards(cards.map(card => card.src === firstCard.src
            ? ({
                ...card,
                isOpened: false,
                isSolved: true,
            }) : card)
        )
        setSelectedCards([])
    }, [selectedCards, cards])

    const checkSelectedCards = useCallback(() => {
        if (selectedCards.length < 2) {
            return
        }

        const [firstCard, secondCard] = selectedCards

        if (firstCard.src === secondCard.src) {
            resolveCards()
        } else {
            if (timeoutId) {
                closeCards()
            } else {
                timeoutId = window.setTimeout(() => {
                    closeCards()
                }, TIMEOUT)
            }
        }
    }, [selectedCards])

    useEffect(() => {
        checkSelectedCards()
    }, [selectedCards])

    useEffect(() => {
        resetGame()
    }, [])

    return {
        cards,
        attempts,
        selectCard,
        resetGame,
    }
}

export default useGameLogic
