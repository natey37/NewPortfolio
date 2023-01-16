import React from 'react'
import { ABOUT_ME_ITEMS } from '../GameBoyColor/gbcConstants'

export default function About({aboutTitlesIndex}) {
  return(
    <div className="about-container">
      <h1 id={"about-title"} className={`about-title ${aboutTitlesIndex === 0 && "underline"}`}>About Me</h1>
      {ABOUT_ME_ITEMS.map((item, index) => {
        return <Card key={`${item} - ${index}`} cardIndex={index+1} item={item} index={aboutTitlesIndex}></Card>
      })}
    </div>
  )
}

const Card = ({item, index, cardIndex}) => {
  return(
    <div className='about-card'>
      <div className="about-card-row"> 
        <h1 id={`card-${item.title}`} className={`about-card-title ${index === cardIndex && "underline"}`}>{item.title}</h1>
        <img className="about-card-image" alt="About me item" src={item.image}></img>
      </div>
      <p className='about-card-text'>{item.text}</p>
    </div>
  )
} 