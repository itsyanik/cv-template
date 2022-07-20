import { render, screen } from '@testing-library/react';
import Education from '../education';

const mockEducationData = [
  {
    startDate: 'MAR/2020',
    endDate: 'MAR/2022',
    company: 'Example University',
    location: 'Nara, JP',
    position: 'Computer Science 101',
  }
];

const mockExtraCoursesData = [{
  title: 'How to train your dragon',
  ongoing: false,
  endDate: 'Depends',
  school: {
    name: 'Dragon Riders',
    teacher: 'That guy'
  }
}];

const mockLanguagesData =[    
  {
  language: 'French', 
  level: 'baguette'
  }, 
  {
    language: 'Korean', 
    level: 'basic'
  }
];

describe('Education Component', () => {
  it('Should render empty section with no props', () => {
    const { container} = render(<Education />);

    const expected = "<section class=\"education\"></section>"

    expect(container.innerHTML).toEqual(expected);
  });

  it('Should render education levels', () => {
    render(<Education education={mockEducationData}/>);

    expect(screen.getByText(/example university/i)).toBeInTheDocument();
  });

  it('Should render extra courses', () => {
    render(<Education extraCourses={mockExtraCoursesData}/>);

    expect(screen.getByText(/dragon riders/i)).toBeInTheDocument();
  });

  it('Should render languages', () => {
    render(<Education languages={mockLanguagesData}/>);

    expect(screen.getByText(/baguette/i)).toBeInTheDocument();
  });

  it('Should display all data', () => {
    render(
      <Education 
        education={mockEducationData}
        extraCourses={mockExtraCoursesData}
        languages={mockLanguagesData}
      />
    );

    expect(screen.getByText(/example university/i)).toBeInTheDocument();
    expect(screen.getByText(/dragon riders/i)).toBeInTheDocument();
    expect(screen.getByText(/baguette/i)).toBeInTheDocument();
  });
});
