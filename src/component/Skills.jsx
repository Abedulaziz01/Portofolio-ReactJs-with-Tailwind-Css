import React from 'react'
import Sectiontitle from './SectionTitle'
import {skills} from '../data'
import Skillcard from './Skillcard'

function Skills() {
  return (
    <section className=' py-20 align-element  ' id="skills">
      <Sectiontitle  text='Teck stack'/>
        <div className=' py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {skills.map((skill)=>{
            return <Skillcard key={skill.id} {...skill}/>
          })}
        </div>
    </section>
  )
}

export default Skills
