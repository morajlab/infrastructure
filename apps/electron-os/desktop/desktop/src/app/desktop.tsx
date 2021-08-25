import { Component } from 'react';
import { Wallpaper, Text, Window, Position } from '../components/Components';
import { Styles } from './desktop.styles';
import type { IDesktopProps } from './desktop.types';

export class Desktop extends Component<IDesktopProps> {
  render() {
    const { root } = Styles({});

    return (
      <Position>
        <Wallpaper image="https://picsum.photos/900" size="contain" />
      </Position>
    );
  }
}

export default Desktop;
