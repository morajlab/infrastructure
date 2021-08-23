import { Component } from 'react';
import { Button } from '@formaxui/components-button';
import { Acrylic } from '@formaxui/components-acrylic';
import { Text } from '@formaxui/components-text';
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
              noStyle={true}
              onClick={this.props.onClose}
              {...button}
              {...closeButton}
            />
            <Button
              noStyle={true}
              onClick={this.props.onMinimize}
              {...button}
              {...minimizeButton}
            />
            <Button
              noStyle={true}
              onClick={this.props.onMaximize}
              {...button}
              {...maximizeButton}
            />
          </div>
          <Text {...title}>{this.props.title}</Text>
        </div>
      </div>
    );
  }
}

export default TitleBar;
