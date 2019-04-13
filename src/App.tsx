import React, { useState } from 'react';
import './App.css';
import { Card } from './Card';
import { TransitionGroup } from 'react-transition-group';
import { ID } from './id';
import { TransitionStatus } from 'react-transition-group/Transition';

const CARDS_TO_DISPLAY = 3;
const INITIAL_CARDS = Array.from(Array(4)).map(() => {
    const id = ID();
    return {
        id,
        content: <h2 style={{ textAlign: 'center' }}>Test {id}</h2>,
    };
});

const App = () => {
    const [cards, setCards] = useState(INITIAL_CARDS);
    return (
        <div className="cards">
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
                    <Card zIndex={0}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'center',
                            }}
                        >
                            <div
                                style={{
                                    maskImage: 'url(/check.svg)',
                                    backgroundColor: 'green',
                                    width: 100,
                                    height: 100,
                                    alignSelf: 'center',
                                }}
                            />
                        </div>
                        <button onClick={() => setCards(INITIAL_CARDS)}>
                            Restart
                        </button>
                    </Card>
                )}
            </TransitionGroup>
        </div>
    );
};

export default App;

function calculateCardZIndex(status: TransitionStatus, index: number) {
    return CARDS_TO_DISPLAY - index + (status === 'exiting' ? 1 : 0);
}
