import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Tile from "./Tile";
import Actions from "../Actions";
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

storiesOf("Tile", module)
    .add("basic tile", () => (<Tile title={title} body={body} meta={meta} imgSrc={imgSrc} />))
    .add("with actions", () => (
        <Tile
            title={title}
            body={body}
            meta={meta}
            imgSrc={imgSrc}
            actions={
                <Actions
                    ActiveToggleIcon={ReadIcon}
                    InactiveToggleIcon={UnreadIcon}
                    DeleteIcon={DeleteIcon}
                    isActive={false}
                    onToggle={action("onToggle")}
                    onRemove={action("onRemove")}
                >
                    <Rating 
                        onRate={action("onRate")}
                        itemId={0}
                        selected={0}
                    />
                </Actions>
            }
        />
    ));