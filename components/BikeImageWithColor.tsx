import React from 'react';
import { ColorVariant } from '../types';

interface BikeImageWithColorProps {
    image: string;
    alt: string;
    selectedColor: ColorVariant;
    className?: string;
}

const BikeImageWithColor: React.FC<BikeImageWithColorProps> = ({
    image,
    alt,
    className = ''
}) => {
    return (
        <img
            src={image}
            alt={alt}
            className={className}
        />
    );
};

export default BikeImageWithColor;
