  import React,{useEffect, useState} from 'react'
  import { Link } from 'react-router-dom'
  import auth from '../firebase'
  import { onAuthStateChanged, signOut } from 'firebase/auth'
  import './Header.css';
  const Header = () => {
      const [currentUser, setCurrentUser] = useState(null)

      const SignOut = async (e) => {
          signOut(auth).then(()=>{
          
      }).catch(error => console.log(error))
      }
      useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
          });
          return () => {
            unsubscribe();
          };
        }, []);   
    return (
      <>
          <div className='header-container'>
              <div className='nav-bar'>
                  {auth.currentUser? <Link to="/">
                      Home
                      </Link>:<div className='userAction'>
                      <Link to='Login'> 
                      Login
                  </Link>
                  <Link to='Signup' >
                      SignUp
                  </Link>
                          </div>}

                  

                  {auth.currentUser? <button onClick={()=> SignOut()}>Log Out</button>: null}
              </div>  
          </div>
      </>
    )
  }

  export default Header