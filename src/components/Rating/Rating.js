import React, { Component } from 'react';
import styles from './styles.css';
import Star from "../Star";

const rate = (onRate, color, index) => (
    onRate(color.id, index)
)

const Rating = ({color, selected = 0, total = 5, onRate}) => (
    <div className={styles.rating}>
        {
            [...Array(total)].map( (n, i) => (
                <Star
                    key={i}
                    selected={i < selected}
                    onClick={rate(onRate, color, i + 1)}
                />
            ))
        }
        <p>{selected} of {total}</p>
    </div>
);

export default Rating;