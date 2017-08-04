import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';

const Actions = ({toggleIconActive, toggleIconInactive, isActive=false, deleteIcon, onToggle, onRemove, rating}) => (
    <div>
        <img src={isActive ? toggleIconActive : toggleIconInactive} />
        <img src={deleteIcon} />
        <div>
            {rating}
        </div>
    </div>
);

export default Actions;