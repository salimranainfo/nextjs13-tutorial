import React from 'react'
import AboutSection from './AboutSection'

const AboutPage = () => {
  const content = [
    {
      title: 'Section 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies.',
      buttonText: 'Learn More',
      isButton: true,
    },
    {
      title: 'Section 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies.',
      buttonText: 'Shop Now',
      isButton: true,
    },
    {
      title: 'Section 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies.',
      buttonText: 'Click Here',
      isButton: true,
    },
    {
      title: 'Section 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies.',
      buttonText: '',
      link: 'https://www.google.com',
      isButton: false,
    },
  ]

  return (
    <div>
      {content.map((item, index) => {
        return <AboutSection key={index} aboutSection={item} />
      })}
    </div>
  )
}

export default AboutPage
