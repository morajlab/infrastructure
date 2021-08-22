import { Component } from 'react';
import { Button } from '@formaxui/components-button';
import { Acrylic } from '@formaxui/components-acrylic';
import { Styles } from './TitleBar.styles';
import type { ITitleBarProps } from './TitleBar.types';

export class TitleBar extends Component<ITitleBarProps> {
  render() {
    const {
      root,
      title,
      button,
      acrylic,
      flexGroup,
      fullSize,
      borderRadius,
      closeButton,
      minimizeButton,
      maximizeButton,
      buttonGroup,
    } = Styles({});

    return (
      <div {...root} {...borderRadius}>
        <Acrylic {...acrylic} {...borderRadius} {...fullSize} />
        <div {...flexGroup} {...fullSize}>
          <div {...buttonGroup}>
            <Button
              styles={{ ...button, ...closeButton }}
              onClick={this.props.onClose}
            />
            <Button
              styles={{ ...button, ...minimizeButton }}
              onClick={this.props.onMinimize}
            />
            <Button
              styles={{ ...button, ...maximizeButton }}
              onClick={this.props.onMaximize}
            />
          </div>
          <span {...title}>{this.props.title}</span>
        </div>
      </div>
    );
  }
}

export default TitleBar;
