import { render, screen } from '@testing-library/react';
import WorkingExperience from '../workingExperience.tsx';

describe('Working Experience Component', () => {
  it('Should not render without props', () => {
    const { container} = render(<WorkingExperience />);

    expect(container).toBeEmptyDOMElement();
  });

  it('Should render with props', () => {
    render(
      <WorkingExperience 
        startDate='MAR/2020'
        endDate='Current'
        company='Example Company'
        location='Quebec, CA'
        position='Senior Software Engineer'
        activities={['Code Reviews', 'Leading newcomers']}
      />
    );

    expect(screen.getByText(/example company/i)).toBeInTheDocument();
  });
});
