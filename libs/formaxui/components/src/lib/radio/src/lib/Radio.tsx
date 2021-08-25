import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Styles } from './Radio.styles';
import type { IRadioProps, IRadioStateProps } from './Radio.types';

export class Radio extends Component<IRadioProps, IRadioStateProps> {
  state: IRadioStateProps = {
    selected: this.props?.selected ?? false,
  };

  componentDidMount() {
    findDOMNode(this)?.addEventListener('click', this.onClickHandler);
  }

  componentWillUnmount() {
    findDOMNode(this)?.removeEventListener('click', this.onClickHandler);
  }

  onClickHandler = () => {
    this.setState(({ selected }) => ({
      selected: !selected,
    }));
  };

  render() {
    const { root, select } = Styles({ selected: this.state.selected });
    const { ...rest } = this.props;

    return (
      <div {...root} {...rest}>
        <div {...select} />
      </div>
    );
  }
}
