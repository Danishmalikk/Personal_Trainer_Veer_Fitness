import React from 'react'
import StepperProgress from './StepperProgress'
import BasicCard from './BasicCard'

const Quiz = () => {
  return (
    <div className=''>
        <div> 
            <h1> Take Our Quiz  </h1>
            <h3> Not sure what programme is right for you ?</h3>
            <h3> Take our quiz below </h3>
        </div>
        <div> 
            <div> 
                <StepperProgress/>
            </div>
        </div>
        <div> 
            <div> 
                <BasicCard/>
            </div>
        </div>
    </div>
  )
}

export default Quiz