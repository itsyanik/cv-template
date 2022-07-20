import { render, screen } from '@testing-library/react';
import Info from '../info';

describe('Info Component', () => {
  it('Should render with default props', () => {
    const { container } = render(<Info />);
    
    expect(container).toBeEmptyDOMElement();
  });

  it('Should render with props', () => {
    render(<Info type='e-mail' info='johndoe@example.com'/>);

    const email = /johndoe@example.com/i;
    const infoType = /e-mail/i;

    expect(screen.getByText(email)).toBeInTheDocument();
    expect(screen.getByText(infoType)).toBeInTheDocument();
  });
});
