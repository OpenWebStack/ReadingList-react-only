import React, { Component } from 'react';
import styles from './styles.css';

const Star = ({ selected = false, onClick }) => (
    <div className={styles.star + (selected) ? styles.selected : ""} onClick={onClick}></div>
);

export default Star;