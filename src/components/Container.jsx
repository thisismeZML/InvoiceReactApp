import React from 'react'

const Container = ({children}) => {
  return (
    <div className='container mx-auto xl:w-[1000px]'>{children}</div>
  )
}

export default Container