import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Text } from '@formaxui/components-text';
import { Styles } from './Button.styles';
import type { IButtonProps } from './Button.types';

export class Button extends Component<IButtonProps> {
  rest;

  constructor(props: IButtonProps) {
    super(props);

    const { children, onClick, noStyle, ...rest } = props;
    this.rest = rest;
  }

  componentDidMount() {
    findDOMNode(this)?.addEventListener('click', this.onClickHandler);
  }

  componentWillUnmount() {
    findDOMNode(this)?.removeEventListener('click', this.onClickHandler);
  }

  onClickHandler = () => {
    if (this.props.onClick) {
      try {
        this.props.onClick();
      } catch (_error) {
        // Do nothing
      }
    }
  };

  render() {
    const { root } = Styles({ noStyle: this.props?.noStyle });

    return (
      <div {...root} {...this.rest}>
        <Text>{this.props.children}</Text>
      </div>
    );
  }
}

export default Button;
