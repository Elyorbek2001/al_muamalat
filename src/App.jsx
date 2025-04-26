

import './App.css'
import Clients from './component/Clients/Clients'
import Fac from './component/Fac/Fac'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Main from './component/Main/Main'
import Media from './component/Media/Media'
import OurTeam from './component/OurTeam/OurTeam'
import Reviews from './component/Reviews/Reviews'
import Services from './component/Services/Services'

function App() {


  return (
    <>
      <Header />
      <Main />
      <Services />
      <OurTeam />
      <Clients />
      <Media />
      <Reviews />
      <Fac />
      <Footer />
    </>
  )
}

export default App
