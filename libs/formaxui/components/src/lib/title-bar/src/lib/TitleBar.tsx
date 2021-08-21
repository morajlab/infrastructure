import { Component } from 'react';
import { Button } from '@formaxui/components-button';
import { Acrylic } from '@formaxui/components-acrylic';
import { Styles } from './TitleBar.styles';
import type { ITitleBarProps } from './TitleBar.types';

export class TitleBar extends Component<ITitleBarProps> {
  render() {
    const {
      root,
      button,
      closeButton,
      minimizeButton,
      maximizeButton,
      buttonGroup,
    } = Styles({});

    return (
      <div {...root}>
        <div {...buttonGroup}>
          <Acrylic />
          <Button styles={{ ...button, ...closeButton }} />
          <Button styles={{ ...button, ...minimizeButton }} />
          <Button styles={{ ...button, ...maximizeButton }} />
        </div>
      </div>
    );
  }
}

export default TitleBar;
