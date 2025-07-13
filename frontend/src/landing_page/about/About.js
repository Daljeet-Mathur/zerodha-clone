import React from 'react';
import Hero from './Hero';
import Team from './Team';
import "./About.css"
import TeamMet from './TeamMet';

function About() {
    return ( 
        <>
         <Hero />
         <Team/>
         <TeamMet/>
        </>
     );
}

export default About;