import React from 'react'
import Navibar from '../Navibar/Navibar'

function Layout({children}) {
  return (
    <>
    <Navibar/>
    {children}
    </>
  )
}

export default Layout