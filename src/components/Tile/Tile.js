import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';

const Tile = ({imgSrc, title, meta, body, onToggle, onDelete}) => (
    <div className={styles.grid}>
        <img className={styles.image} src={imgSrc} />
        <h3>{title}</h3>
        <h6>{meta}</h6>
        <p>{body}</p>
    </div>
)

export default Tile;