import { Auth } from "./Authentications"
import { useNavigate, Navigate } from "react-router-dom"

export const AuthCheckAdmin =({children})=> {
    const auth = Auth()
    // const navigator = useNavigate()
    if(!auth.admin){
      <Navigate to='/'/>
    }
  return (
     auth.admin && children 
  )
}
 
