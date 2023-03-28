import React, { useState, useEffect } from 'react'
import NavigationMenu from "./components/navigation-menu/NavigationMenu.js"
import Header from "./components/header/Header.js"
import Home from "./pages/Home.js"

function App() {
  const [showMenuDesktop, setShowMenuDesktop] = useState(true)
  const [widthScreen, setWidthScreen] =  useState(window.innerWidth)
  const [showPage, setShowPage] = useState('')
  const [showMenu, setShowMenu] = useState('')

  const hidePage = (val) => {
    if(val === 'block') {
      if(!showMenuDesktop) {
        setShowMenuDesktop(true)
        setShowMenu('block')
      } else {
        setShowMenuDesktop(false)
        setShowMenu('hidden')
      }
    } else {
      setShowPage(val)
      setShowMenu('block')
    }
  }
  const hideMenu = (val) => {
    setShowMenu(val)
    setShowPage('block')
  }
  
  useEffect(()=> {
    widthScreen < 1024 ? setShowMenu('hidden') : setShowMenu('block')
  },[widthScreen, setWidthScreen])

  return (
    <div className="App relative">
      <div className={`fixed top-0 lg:z-0 z-20 ${ showMenu }`}>
        <NavigationMenu onEvent={ hideMenu } />
      </div>
      {
        !showMenuDesktop ? (
          <div> 
            <div className={`fixed w-full top-0 min-[1224px]:ml-[0px] ml-0 min-[1224px]:pr-[0px] pr-0 z-10 ${ showPage }`} >
              <Header onEvent={ hidePage } />
            </div>
            <div className={`min-[1224px]:ml-[0px] ml-0 ${ showPage }`}>
              <Home />
            </div>
          </div>
        ): (
          <div>
            <div className={`fixed w-full top-0 min-[1224px]:ml-[295px] ml-0 min-[1224px]:pr-[295px] pr-0 z-10 ${ showPage }`}>
              <Header onEvent={ hidePage }  />
            </div>
            <div className={`min-[1224px]:ml-[295px] ml-0 ${ showPage }`}>
              <Home />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default App
