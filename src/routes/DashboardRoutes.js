import {Routes, Route} from 'react-router-dom'
import { Dc } from '../components/Dc/Dc'
import { Hero } from '../components/hero/Hero'
import { Marvel } from '../components/marvel/Marvel'
import { Search } from '../components/search/Search'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className='container'>
          <Routes>
              <Route path="marvel" element={<Marvel/>}/>
              <Route path="dc" element={<Dc/>}/>
              <Route path="search" element={<Search/>}/>
              <Route path="hero/:heroId" element={<Hero/>}/>
          </Routes>
        </div>

    </>
  )
}
