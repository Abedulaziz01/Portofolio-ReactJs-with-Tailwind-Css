import React from 'react'
import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
function About() {
  return (
    <section className=' bg-white py-20 'id='about'>
        <div className=' align-item grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg} className=' w-full h-64'/>
            <article>
                <SectionTitle text="code and coffe"/>
                <p className=' text-slate-600 mt-8 leading-loose px-4'
                >The projects are very interesting and also have good css styling
                     so in the end you can see good looking projects, this course has 
                     everything to prepare you as a React developer. 
                     I am very happy with this course. Recommended 100%</p>
            </article>
        </div>

    </section>
  )
}

export default About
