
import { Container } from "@mui/system"
import { Searcher } from "./components/searcher"
import { UserCard } from "./components/userCard";

import { useUserGithub } from "./hooks/useUserGithub";
function App() {
  const { userData, setValueSearch } = useUserGithub();


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
    }}>
      <Searcher onSearch={setValueSearch} />
      <UserCard user={userData}/>
    </Container>
  )
}

export default App
