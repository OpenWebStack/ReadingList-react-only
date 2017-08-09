import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TileList from "../TileList";
import ReadIcon from "../ReadIcon";
import UnreadIcon from "../UnreadIcon";
import DeleteIcon from "../DeleteIcon";
import Rating from "../Rating";

import {
    title,
    imgSrc,
    meta,
    body
} from "../../MockData";

let assets = [
    {
        id: 0,
        title,
        imgSrc,
        meta,
        body,
        isRead: false,
        rating: 0
    }
];

storiesOf("TileList", module)
    .add("default", () => (
        <TileList 
            assets={assets}
            onDelete={action("onDelete")}
            onToggle={action("onToggle")}
            onRate={action("onRate")}
        />
));