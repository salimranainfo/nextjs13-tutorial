import React from 'react'
import Button from '../components/Global/Button'
import Image from 'next/image'

interface AboutSection {
  title: string
  description: string
  buttonText: string
  link?: string | undefined
  isButton: boolean
}

interface Props {
  aboutSection: AboutSection
  key: number
}

const AboutSection = ({ key, aboutSection }: Props) => {
  return (
    <div key={key} className="mb-4">
      <Image src="/about/next.svg" width={200} height={200} alt="" />
      <h2>{aboutSection.title}</h2>

      <p>{aboutSection.description}</p>

      {aboutSection.isButton && <Button label={aboutSection.buttonText} />}

      {aboutSection.link && <a href={aboutSection.link}>{aboutSection.link}</a>}
    </div>
  )
}

export default AboutSection
