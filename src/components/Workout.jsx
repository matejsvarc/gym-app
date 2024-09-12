import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExcerciseCard from './ExcerciseCard'

export default function Workout(props) {
  const { workout } = props
  return (
    <SectionWrapper header={"Fakt musím něco vymyslet"} title={['upravit', 'tenhle', 'text též plsky']}>
      <div id={'workout'} className='flex flex-col gap-4'>
        {workout.map((exercise, i) => {
          return (
            <ExcerciseCard i={i} exercise={exercise} key={i} />
          )
        })}
      </div>
    </SectionWrapper>
  )
}
