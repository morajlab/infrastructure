import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import {  } from 'react-rnd';
import { Styles } from './Window.styles';
import type { IWindowProps } from './Window.types';

export class Window extends Component<IWindowProps> {
  render() {
    const { root, iframe } = Styles({});

    return (
      <div {...root}>
        <iframe
          src={this.props.url}
          title={this.props.title}
          {...iframe}
        ></iframe>
      </div>
    );
  }
}

export default Window;
