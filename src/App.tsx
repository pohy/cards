import React, { useState } from 'react';
import './App.css';
import { Card } from './Card';
import { TransitionGroup } from 'react-transition-group';
import { ID } from './id';
import { ResetCard } from './ResetCard';

const CARDS_TO_DISPLAY = 3;
const INITIAL_CARDS = Array.from(Array(4)).map(() => {
    const id = ID();
    return {
        id,
        content: <h2 style={{ textAlign: 'center' }}>Card {id}</h2>,
    };
});

export const App = () => {
    const [cards, setCards] = useState(INITIAL_CARDS);
    return (
        <div className="App">
            <TransitionGroup component={null}>
                {cards
                    .slice(0, CARDS_TO_DISPLAY)
                    .map(({ content, id }, index) => (
                        <Card
                            onClick={() => setCards(cards.slice(1))}
                            key={id}
                            zIndex={CARDS_TO_DISPLAY - index}
                        >
                            {content}
                        </Card>
                    ))}
                {cards.length < CARDS_TO_DISPLAY && (
                    <ResetCard onReset={() => setCards(INITIAL_CARDS)} />
                )}
            </TransitionGroup>
        </div>
    );
};
