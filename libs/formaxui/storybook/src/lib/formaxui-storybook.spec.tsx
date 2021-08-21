import { render } from '@testing-library/react';

import FormaxuiStorybook from './formaxui-storybook';

describe('FormaxuiStorybook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormaxuiStorybook />);
    expect(baseElement).toBeTruthy();
  });
});
