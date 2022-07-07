import { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom'


export const Albums = () => {
  let {Id} = useParams();
  const [users,setUser] = useState([]);
  const urlFinal = "https://jsonplaceholder.typicode.com/albums?userId="+Id;

  useEffect(()=>{
    fetch(urlFinal)
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
    })

},[setUser]);
    return (
      <>    
      <div>
        <header class='header'>
          <p class='header-intro'>Below are the Album details of</p>
          <h1 class='header-heading'>User {Id}</h1>
        </header>
        {users.map((user) => (
          <div>
            <section class="introduction-section">
              <h1>{user.title}</h1>
              <p>{user.body}</p>
            </section>             
          </div> 
        ))}    
      </div> 
      </>
    )
  }