import * as React from 'react';
import { Card } from './Card';

export const ResetCard = ({ onReset }: any) => (
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
        <button onClick={onReset}>Restart</button>
    </Card>
);
