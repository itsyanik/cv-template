import { render, screen } from '@testing-library/react';
import PersonalInfo from '../personalInfo';

describe('Personal Info Component', () => {
  it('Should not render without props', () =>{
    const { container } = render(<PersonalInfo />);

    expect(container).toBeEmptyDOMElement();
  });

  it('Should render component with props', () => {
    const mockData = [{ type:'test', info:'more test' }];
    render(
      <PersonalInfo 
        name='Ash' 
        goals="To Catch 'em all" 
        contactInformation={mockData} 
      />
    );

    const goal = /To Catch 'em all/i;
    expect(screen.getByText(goal)).toBeInTheDocument();
  });
});
