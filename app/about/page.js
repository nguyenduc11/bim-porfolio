import React from 'react'
import Navbar from '../components/Navbar'
import PersonalInfo from '../components/about/PersonalInfo'
import Education from '../components/about/Education'
import Experience from '../components/about/Experience'
import Interests from '../components/about/Interests'

import { 
  personalInfo, 
  locationData, 
  educationData, 
  experienceData, 
  interestsData 
} from '../data/aboutData'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-gray-50">
        <PersonalInfo data={personalInfo} locationData={locationData} />
        <Education data={educationData} />
        <Experience data={experienceData} />
        <Interests data={interestsData} />
      </main>
    </>
  )
}
