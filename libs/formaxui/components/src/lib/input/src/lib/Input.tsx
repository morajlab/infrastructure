import { Component } from 'react';
import { Styles } from './Input.styles';
import type { IInputProps } from './Input.types';

export class Input extends Component<IInputProps> {
  render() {
    const { root, input } = Styles({});
    const { ...rest } = this.props;

    return (
      <div {...root} {...rest}>
        <input type="text" placeholder="Enter text" {...input} />
      </div>
    );
  }
}

export default Input;
