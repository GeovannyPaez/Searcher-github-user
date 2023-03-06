
import { Container, height } from "@mui/system"
import { Searcher } from "./components/searcher"
import { useState, useEffect } from 'react'
import { getUserGitHub } from "./services/getUser";
function App() {
  const [valueSearch, setValueSearch] = useState('octocat');
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getUserGitHub(valueSearch)
      .then(user => {
        if (valueSearch === 'octocat') {
          window.localStorage.setItem('octocat', JSON.stringify(user));
        }
        setUserData(user)
      })
      .catch(err => {
        const user = JSON.parse(localStorage.getItem('octocat') as string);
        setUserData(user);
        console.log(err)
      })
  }, [valueSearch]);
  console.log(userData);
  return (
    <Container sx={{
      backgroundColor: 'whitesmoke',
      width: '80vw',
      borderRadius: '10px',
      height: '500px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }} >
      <Searcher onSearch={setValueSearch} />
    </Container>
  )
}

export default App
