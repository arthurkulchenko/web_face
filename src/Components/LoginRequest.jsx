import React from 'react'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

export default class LoginRequest extends React.Component{
  render(){
    return(
      <Request>
        method="" /* get, delete, head, post, put and patch - required */
        url="" /*  url endpoint to be requested - required */
        data={} /* post data - optional */
        onSuccess={(response)=>{}} /* called on success of axios request - optional */
        onLoading={()=>{}} /* called on start of axios request - optional */
        onError=(error)=>{} /* called on error of axios request - optional */
      </Request>
    )
  }
}