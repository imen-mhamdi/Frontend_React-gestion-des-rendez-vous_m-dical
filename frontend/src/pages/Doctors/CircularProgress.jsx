import React from 'react';

const CircularProgress = ({ percent, imgUrl, alt }) => {
    // Calcul de la taille du cercle en fonction du pourcentage
    const circleRadius = 40;
    const circleStrokeWidth = 6;
    const circleCenter = circleRadius + circleStrokeWidth;
    const circumference = 2 * Math.PI * circleRadius;
    const progress = circumference - (percent / 100) * circumference;

    return (
        <div style={{ position: 'relative', width: `${2 * circleCenter}px`, height: `${2 * circleCenter}px` }}>
            <svg width={`${2 * circleCenter}`} height={`${2 * circleCenter}`} viewBox={`0 0 ${2 * circleCenter} ${2 * circleCenter}`}>
                <circle
                    className="progress-ring-circle"
                    stroke="#e6e6e6"
                    strokeWidth={circleStrokeWidth}
                    fill="transparent"
                    r={circleRadius}
                    cx={circleCenter}
                    cy={circleCenter}
                />
                <circle
                    className="progress-ring-circle"
                    stroke="#6CB4EE"
                    strokeWidth={circleStrokeWidth}
                    strokeDasharray={`${circumference} ${circumference}`}
                    style={{ strokeDashoffset: progress }}
                    fill="transparent"
                    r={circleRadius}
                    cx={circleCenter}
                    cy={circleCenter}
                />
            </svg>
            <img src={imgUrl} className="img-fluid" alt={alt} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60%', height: '60%' }} />
        </div>
    );
};

export default CircularProgress;
