import { Component } from 'react';
import { Styles } from './Button.styles';
import type { IButtonProps } from './Button.types';

export class Button extends Component<IButtonProps> {
  render() {
    const { root } = Styles({});

    return (
      <div {...root}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        perferendis corrupti provident incidunt officiis nam. Repellat ipsam
        quam, dolore modi mollitia, laudantium ducimus vitae expedita nemo alias
        pariatur blanditiis eligendi!
      </div>
    );
  }
}

export default Button;
