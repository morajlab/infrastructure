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

    if (this.props.onClick) {
      try {
        this.props.onClick();
      } catch (_error) {
        // Do nothing
      }
    }
  };

  render() {
    const { root } = Styles({ theme: this.props.theme });

    return (
      <div {...{ ...root, ...(this.props?.styles ?? {}) }}>
        {this.props.children}
      </div>
    );
  }
}

export default Button;
