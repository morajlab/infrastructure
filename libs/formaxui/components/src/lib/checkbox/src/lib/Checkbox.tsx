import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Styles } from './Checkbox.styles';
import type { ICheckboxProps, ICheckboxStateProps } from './Checkbox.types';

export class Checkbox extends Component<ICheckboxProps, ICheckboxStateProps> {
  state: ICheckboxStateProps = {
    checked: this.props?.checked ?? false,
  };

  componentDidMount() {
    findDOMNode(this)?.addEventListener('click', this.onClickHandler);
  }

  componentWillUnmount() {
    findDOMNode(this)?.removeEventListener('click', this.onClickHandler);
  }

  onClickHandler = () => {
    this.setState(({ checked }) => ({
      checked: !checked,
    }));
  };

  render() {
    const { root, svg } = Styles({ checked: this.state.checked });
    const { ...rest } = this.props;

    return (
      <div {...root} {...rest}>
        <svg viewBox="0 0 285 283.4" {...svg}>
          <path
            fill="#ffffff"
            d="M101.2,215.7L227.5,20.6c0,0,20.7-31.9,44.4-16.2c25.4,16.8,6.1,41,6.1,41L134.5,271.9c0,0-8.8,11.5-23.9,11.5 s-29.2-13.3-29.2-13.3L2.7,175.4c0,0-9.4-17.3,6.8-27.4c19.7-12.3,34.6,2.8,34.6,2.8L101.2,215.7z"
          ></path>
        </svg>
      </div>
    );
  }
}

export default Checkbox;
