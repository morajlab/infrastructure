import { render } from '@testing-library/react';

import FormaxuiComponentsSrcLibWindow from './FormaxuiComponentsSrcLibWindow';

describe('FormaxuiComponentsSrcLibWindow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormaxuiComponentsSrcLibWindow />);
    expect(baseElement).toBeTruthy();
  });
});
