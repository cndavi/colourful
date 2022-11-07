import { useEffect, useState } from 'react'
import useMediaQuery from './hooks/useMediaQuery'
import DotGroup from './scenes/DotGroup'
import Navbar from './scenes/Navbar'

const App = () => {
  const [selectedPage, setSelectedPage] = useState<string>('home')
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true)
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>
    </div>
  )
}

export default App
