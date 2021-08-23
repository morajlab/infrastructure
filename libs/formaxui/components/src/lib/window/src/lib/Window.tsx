import { Component } from 'react';
import { Rnd } from '@formaxui/components-rnd';
import { TitleBar } from '@formaxui/components-titlebar';
import { Styles } from './Window.styles';
import type { IWindowProps } from './Window.types';

const defaultProps: Partial<IWindowProps> = {
  minHeight: 400,
  minWidth: 400,
};

export class Window extends Component<IWindowProps> {
  render() {
    const { root, iframe, rnd } = Styles({});

    return (
      <Rnd
        minHeight={this.props?.minHeight ?? defaultProps.minHeight}
        minWidth={this.props?.minWidth ?? defaultProps.minWidth}
        {...rnd}
      >
        <div {...root}>
          <TitleBar title={this.props.title} />
          <iframe
            src={this.props.url}
            title={this.props.title}
            {...iframe}
          ></iframe>
        </div>
      </Rnd>
    );
  }
}

export default Window;
