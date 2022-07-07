import {Routes,Route} from 'react-router-dom'
import { Users } from './Users'
import { Posts } from './Posts'
import { About } from './About'
import { Albums } from './Albums'


function App() {
  return (
    <div >
      
      <Routes>
        { <Route path='/' element={<Users />} />}
        <Route path='posts/:Id' element={<Posts />} />
        <Route path='about' element={<About />} />
        <Route path='albums/:Id' element={<Albums />} />
      </Routes> 

    </div>
  )
}

export default App;
