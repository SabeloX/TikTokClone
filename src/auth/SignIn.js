import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import firebase, {auth} from '../firebase'
import './auth.css'
import { useHistory } from 'react-router-dom'

const SignIn = () => {

    const history = useHistory()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            user && history.push('/')
        })
    },[])

    const signIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
        .then(res => history.push('/'))
    }

    return (
        <div className="container">
            <h1>Tik Tok Clone</h1> <small>by SabeloX</small>
            <div className='signin'>
                <h3>Signin to view the videos</h3>
                <Button className='btn' onClick={signIn}>Signin With Google</Button>
            </div>
        </div>
    )
}

export default SignIn