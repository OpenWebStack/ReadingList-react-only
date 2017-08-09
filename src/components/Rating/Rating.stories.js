import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Rating from "../Rating";

var data = {
    itemId: 0,
    selected: 1
};


storiesOf("Rating", module).addDecorator(withKnobs)
    .add("default", () => (
        <Rating
            onRate={action("onRate")}
            itemId={data.itemId}
            selected={number("rating", data.selected)}
        />
    ));