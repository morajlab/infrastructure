import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Styles } from './Button.styles';
import type { IButtonProps } from './Button.types';

export class Button extends Component<IButtonProps> {
  componentDidMount() {
    findDOMNode(this)?.addEventListener('click', this.onClickHandler);
  }

  componentWillUnmount() {
    findDOMNode(this)?.removeEventListener('click', this.onClickHandler);
  }

  onClickHandler = () => {
    console.log('This is for test');
  };

  render() {
    const { root } = Styles({ theme: this.props.theme });

    return <div {...root}>{this.props.text}</div>;
  }
}

export default Button;
