import React from 'react'
import styles from './Login.module.css';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../../store/reducer/auth.reducer';
import {useState} from 'react'

function Login() {
    const [user, setUser] = useState ({
        identifier:'',
        password:''
    });

     const dispatch = useDispatch()

    const changeHandler = e => {
        setUser(user =>{
            return{
                ...user,
                [e.target.name]:e.target.value
            }
        })
    }

    const submitHandler = e =>{
    e.preventDefault();
    dispatch(fetchLogin(user));
    setUser({
        identifier:'',
        password:''
    });
    }

  return (
    <div className={styles.auth__login}>
        <form onSubmit={submitHandler}>
            <div className={styles.group}>
                <h2 className={styles.login_title}>Авторизация</h2>
                <input className={styles.input}
                name="identifier" 
                onChange={changeHandler} 
                value={user.identifier}
                type="text" 
                placeholder='Введите почту' />
            </div>
            <div className={styles.group}>
                <input className={styles.input} 
                onChange={changeHandler} 
                name="password"
                value={user.passwrod}
                type="password" 
                placeholder='Введите пароль' />
            </div>
            <div className={styles.group}>
                <a className={styles.auth_btn}>Войти</a>
            </div>
        </form>
    </div>
  )
}

export default Login