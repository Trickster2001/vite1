import { useContext } from "react"
import UserContext from "../context/UserContext"


const Profle = () => {
  const {user} = useContext(UserContext);
  if(!user) return (<div>Please Login</div>)
  return <div>Welcome {user.username}</div>
}

export default Profle