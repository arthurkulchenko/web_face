import React from 'react'
import ReportDetail from './ReportDetail'

export default class Reports extends React.Component{
  render(){
    return(
           <div className="wrapper">
             <h2>Проверки</h2>
             <ul>
               <li><ReportDetail /></li>
             </ul>
           </div>
    )
  }
}