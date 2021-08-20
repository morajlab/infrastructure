import { Component } from 'react';
import { Styles } from './TitleBar.styles';
import type { ITitleBarProps } from './TitleBar.types';

export class TitleBar extends Component<ITitleBarProps> {
  render() {
    const { root } = Styles({});

    return <div {...root}></div>;
  }
}

export default TitleBar;
