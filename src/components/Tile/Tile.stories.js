import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Tile from "./Tile";

storiesOf('Tile', module)
  .add('basic tile', () => (
    <Tile title="A Title" body="Body text" meta="Meta" imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/P-51_Mustang_edit1.jpg/1280px-P-51_Mustang_edit1.jpg" />
  ));