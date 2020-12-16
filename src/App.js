import { useState, useRef } from 'react'
import {darkTheme, lightTheme} from './Components/Themes'
import './App.css';

function App() {
  const [theme, setTheme] = useState('light')
  const [errorTextOnPassword, setPasswordErrorText] = useState('')
  const [errorTextOnUsername, setUsernameErrorText] = useState('')
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const passwordRef = useRef(null)
  const usernameRef = useRef(null)

  return (
    <>
      <div className={theme}>
        <h1 className='sr-only'>Login Form with React.js</h1>
        <label htmlFor='theme-toggler' className={themeMode.togglerText}>
          <label className="switch mr-3">
            <input onChange={ () => theme === 'light' ? setTheme('dark') : setTheme('light')} type="checkbox" id='theme-toggler' />
            <span className="slider round"></span>
          </label>
          Switch {theme === 'light' ? 'dark' : 'light'} theme
        </label>
        <section className='py-5 login-from-section'>
          <div className="login-form-wrapper container p-5 rounded">
            <h2 className={themeMode.loginHeading}>User Login</h2>
            <form className={themeMode.loginForm} action='https://echo.htmlacademy.ru' method='POST'
              onSubmit={
                (evt) => {
                  evt.preventDefault()
                  if (String(usernameRef.current.value.trim()).length === 0) {
                    setUsernameErrorText('Enter username')
                    return
                  }
                  setUsernameErrorText('')

                  if (String(passwordRef.current.value.trim()).length === 0) {
                    setPasswordErrorText('Enter password')
                    return
                  }
                  if (String(passwordRef.current.value.trim()).length < 6) {
                    setPasswordErrorText('Min 6 characters')
                    return
                  }

                  setPasswordErrorText('')
                }}
            >
              <div className='mb-4'>
                <label className={themeMode.loginLabel} htmlFor='username-input'>Username</label>
                <input ref={usernameRef} className='form-control' id='username-input' type='text' name='username' placeholder='Username' autoComplete='off' onChange={ (evt) => evt.target.value.length > 0 ? usernameRef.current.style = 'border: 2px solid green' : usernameRef.current.style = 'border: 2px solid red'} />
                <span className='text-danger'>{errorTextOnUsername}</span>
              </div>
              <div className='mb-4'>
                <label className={themeMode.loginLabel} htmlFor='password-input'>Password</label>
                <input ref={passwordRef} className='form-control' id='password-input' type='password' name='password' placeholder='Min 6 characters' onChange={ (evt) => evt.target.value.length >= 6 ? passwordRef.current.style = 'border: 2px solid green' : passwordRef.current.style = 'border: 2px solid red'} />
                <span className='text-danger'>{errorTextOnPassword}</span>
              </div>
              <button className='btn btn-light border align-self-center px-4 font-weight-bold' type='submit'>Login</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
