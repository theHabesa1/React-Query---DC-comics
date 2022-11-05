import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Homepage } from './Components/Home.page.js'
import { RQSuperHeroes } from './Components/RQSuperHeroes.page.js'
import { SuperHeroes } from './Components/SuperHeroes.page.js'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RQSuperHeroesPage } from './Components/RQSuperHero.page'


const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>

          <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroesPage/>}/>
          <Route path='/super-heroes' element ={<SuperHeroes />}> 
            
          </Route>
          <Route path='/rq-super-heroes' element={<RQSuperHeroes />}>
            
          </Route>
          <Route path='/' element={<Homepage />}>
            
          </Route>
        </Routes>
      </div>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App