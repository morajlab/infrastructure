import { Component } from 'react';
import { findDOMNode } from 'react-dom';
// eslint-disable-next-line
import { Rnd } from '@formaxui/components-rnd';
import { Styles } from './Window.styles';
import type { IWindowProps } from './Window.types';

const defaultProps: Partial<IWindowProps> = {
  minHeight: 400,
  minWidth: 400,
};

export class Window extends Component<IWindowProps> {
  render() {
    const { root, iframe, fullSize, titleBar } = Styles({});

    return (
      <Rnd
        minHeight={this.props?.minHeight ?? defaultProps.minHeight}
        minWidth={this.props?.minWidth ?? defaultProps.minWidth}
      >
        <div {...root} {...fullSize}>
          <div {...titleBar}></div>
          <iframe
            src={this.props.url}
            title={this.props.title}
            {...iframe}
            {...fullSize}
          ></iframe>
        </div>
      </Rnd>
    );
  }
}

export default Window;
