import { render } from '@testing-library/react';
import Experiences from '../experiences.tsx';

describe('Working Experience Component', () => {
  it('Should not render without props', () => {
    const { container} = render(<Experiences />);

    expect(container).toBeEmptyDOMElement();
  });
});
