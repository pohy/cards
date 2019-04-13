import * as React from 'react';
import { Card } from './Card';
import './ResetCard.css';

export const ResetCard = ({ onReset }: any) => (
    <Card zIndex={0}>
        <div className="ResetCard">
            <div className="check" />
        </div>
        <button onClick={onReset}>Restart</button>
    </Card>
);
