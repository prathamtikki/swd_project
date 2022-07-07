import { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './users.css'


export const Users = () => {
  let {Id} = useParams();
  const [users,setUser] = useState([]);
  const urlFinal = "https://jsonplaceholder.typicode.com/users";
  const urlF="/posts/"+{Id}
  useEffect(()=>{
    fetch(urlFinal)
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
    })
  },[setUser]);
    return (
      <>
      <header class='header'>
        <p class='header-intro'>Welcome!</p>
        <h1 class='header-heading'>Homepage </h1>
      </header>
      <section class="introduction-section">             
              <h1>List of all the users</h1>   
              
            </section>

      <table class="table table-dark table-borderless">
      <thead >
        <tr>
          <th scope='col'>ID NO</th>
          <th scope='col'>NAME</th>
          <th scope='col'>USER NAME</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user)=> (
          <tr class="table-success" key={user.id}>
            <th class="table-success"scope='row'><Link to={urlF}>{user.id}</Link></th>
            <td class="table-danger">{user.name}</td>
            <td>{user.username}</td>
          </tr>
        ))}
        
      </tbody>
    </table>
      
      </>
    )
  }