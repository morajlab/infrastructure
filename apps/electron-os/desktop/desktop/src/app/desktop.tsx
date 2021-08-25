import { Component } from 'react';
import { Styles } from './desktop.styles';
import type { IDesktopProps } from './desktop.types';

export class Desktop extends Component<IDesktopProps> {
  render() {
    const { root } = Styles({});

    return (
      <div {...root}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
        molestias! Deleniti quia dolore aliquid laborum incidunt, earum fuga
        odio aut, asperiores, reiciendis laudantium perferendis ex blanditiis
        ipsum nesciunt ut odit.
      </div>
    );
  }
}

export default Desktop;
