import * as React from 'react';
import './Card.css';
import { CSSTransition } from 'react-transition-group';

export const Card = ({ children, onClick, zIndex, ...props }: any) => {
    return (
        <CSSTransition timeout={200} {...props}>
            {(status) => (
                <div
                    className={`Card${onClick ? ' clickable' : ''}`}
                    style={{ zIndex: zIndex + (status === 'exiting' ? 1 : 0) }}
                    {...{ onClick, ...props }}
                >
                    {children}
                </div>
            )}
        </CSSTransition>
    );
};
