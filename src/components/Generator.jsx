import React from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/workouts'

function Header(props) {
    const { index, title, description } = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator() {
  return (
    <SectionWrapper id={'generate'} header={"Generate your workout"} title={['změnit', 'tenhle', 'text taky pak']}>
        <Header index={'01'} title={"Vyberte si cvik"} description={"Vyberte si cvik kterým chcete začít "}/>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>

        {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return(
                <button key={typeIndex}>
                    <p>{type}</p>
                </button>
            )
        })}
        </div>
    </SectionWrapper>
  )
}
