import React from 'react';
import Education from './components/Education/education.tsx';
import Experiences from './components/Experiences/experiences.tsx';
import Header from './components/Header/header.tsx';
import './App.scss';

function App() {
  const contactInfo = [
    {
      type: 'email',
      info:'johndoe@example.com'
    },
    {
      type: 'born in',
      info:'05/NOV/1991'
    },
    {
      type: 'linkedin',
      info: 'linkedin.com/your-url'
    },
    {
      type: 'phone',
      info:'(99) 999 9999'
    },
  ];

  const experiences = [
    {
      startDate: 'March 2020',
      endDate: 'Current',
      company: 'Example Company',
      location: 'Quebec, CA',
      position: 'Senior Software Engineer',
      activities: ['Code Reviews', 'Leading newcomers']
    },
    {
      startDate: 'October 2018',
      endDate: 'September 2019',
      company: 'More Company',
      location: 'Xiang, CN',
      position: 'Jr Frontend Developer',
      activities: ['Doing my best', 'Learning so much']
    }
  ];

  const graduation = [
    {
      startDate: 'March 2020',
      endDate: 'March 2022',
      company: 'Example University',
      location: 'Nara, JP',
      position: 'Computer Science 101',
    }
  ];

  const extraCourses = [
    {
      title: 'JavaScript Master Class',
      ongoing: false,
      endDate: 'April 2019',
      school: {
        name: 'Alura',
        teacher: 'Mark'
      }
    }, 
    {
      title: 'Data Structure and OOP',
      ongoing: true,
      endDate: 'November 2018',
      school: {
        name: 'Alura',
        teacher: 'Willson'
      }
    }
  ];

  const languages = [
    {
      language: 'French', 
      level: 'Intermediate'
    }, 
    {
      language: 'Korean', 
      level: 'Advanced'
    },
    {
      language: 'English', 
      level: 'Native'
    },
  ];

  return (
    <React.Fragment>
      <Header 
        name="John Doe"
        goals="To be the very best like no one ever was"
        contactInformation={contactInfo}
      />
      <Experiences experiences={experiences}/>
      <Education 
        education={graduation}
        extraCourses={extraCourses}
        languages={languages}
      />
    </React.Fragment>
  );
};

export default App;
