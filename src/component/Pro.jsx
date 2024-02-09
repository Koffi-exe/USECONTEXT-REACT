import React, {useContext} from 'react'
import UserContext from '../assets/context/UserContext'

export default function Pro() {
    const {user} = useContext(UserContext);
    
    if(!user)return <div>Login!</div>
    return <div>Welcome {user.username}</div>
}
