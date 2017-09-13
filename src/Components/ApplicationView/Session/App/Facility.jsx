import React from 'react'
import NewExamination from './Facility/KroApp2/NewExamination'
import Reports from './Facility/KroApp2/Reports'

export default class Facility extends React.Component{
  render(){
    return(
    // new request for facilty reports AMS Facility
      <div>
        <NewExamination />
      </div>
    )
  }
}