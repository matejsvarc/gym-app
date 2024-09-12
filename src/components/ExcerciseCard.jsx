import React from 'react'

export default function ExcerciseCard(props) {
    const {exercise, i} = props
  return (
    <div className='bg-slate-950 p-4 rounded-md flex flex-col gap-4 border-slate-950 sm:flex-wrap'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4 '>
        <h4 className='text-3l sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400'>
          0{i + 1}
        </h4>
        <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center'>
          {exercise.name.replaceAll('_', " ")} 
        </h2>
        <p className='text-sm text-slate-300 capitalize'>
        {exercise.type}
        </p>
      </div>
      <div className='flex flex-col '>
        <h3 className='text-slate-400 text-sm'>Svalové skupiny</h3>
        <p className='capitalize'>{exercise.muscles.join(' & ')}</p>
      </div>
    </div>
  )
}
