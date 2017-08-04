import React, { Component } from 'react';
import styles from "./styles.css";
import Grid from "../Grid";

const Tile = ({imgSrc, title, meta, body=[], onToggle, onDelete, actions}) => (
    <Grid className={styles.grid} columns="1fr 2fr">
        <img className={styles.image} src={imgSrc} alt="" />
        <section className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <h6 className={styles.meta}>{meta}</h6>
            {
                body && body.map( (paragraph, i) => (
                    <p key={i} className={styles.body}>{paragraph}</p>
                ))
            }
        </section>
        {actions}
    </Grid>
);

export default Tile;