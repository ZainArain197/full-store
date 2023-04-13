import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


const SafeRoutes = () => {

  let cu = useSelector(store => store.userSection.cu)
  // if (cu.username) {
  //   let auth = { 'token': false}
  // }else if(cu.username==undefined){
  //   let auth = { 'token': true}
  // }

  return (

    cu.username ? <Outlet /> : <Navigate to={'/PageNotFound'} />

  )
}

export default SafeRoutes
