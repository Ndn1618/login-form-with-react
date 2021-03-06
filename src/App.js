import { useState, useRef } from 'react'
import './App.css';

function App() {
  const [theme, setTheme] = useState('light')
  const [errorTextOnPassword, setPasswordErrorText] = useState('')
  const [errorTextOnUsername, setUsernameErrorText] = useState('')
  const passwordRef = useRef(null)
  const usernameRef = useRef(null)
  const loggedTextRef = useRef(null)

  return (
    <>
      <div className={theme}>
        <h1 className='sr-only'>Login Form with React.js</h1>
        <label htmlFor='theme-toggler' className='toggler-label d-flex align-items-center p-3'>
          <label className="switch mr-3">
            <input onChange={ () => theme === 'light' ? setTheme('dark') : setTheme('light')} type="checkbox" id='theme-toggler' />
            <span className="slider round"></span>
          </label>
          Switch {theme === 'light' ? 'dark' : 'light'} theme
        </label>
        <section className='py-3 login-from-section'>
          <div className="login-form-wrapper container p-5 rounded">
            <h2 className='login-heading text-center mb-3'>User Login</h2>
            <form className='login-form d-flex flex-column justify-content-center p-4 rounded' action='https://echo.htmlacademy.ru' method='POST'
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

                  loggedTextRef.current.classList.remove('d-none')
                }}
            >
              <div className='mb-4'>
                <label className='label h5' htmlFor='username-input'>Username</label>
                <input ref={usernameRef} className='form-control' id='username-input' type='text' name='username' placeholder='Username' autoComplete='off' onChange={ (evt) => evt.target.value.length > 0 ? usernameRef.current.style = 'border: 2px solid green' : usernameRef.current.style = 'border: 2px solid red'} />
                <span className='text-danger'>{errorTextOnUsername}</span>
              </div>
              <div className='mb-4'>
                <label className='label h5' htmlFor='password-input'>Password</label>
                <input ref={passwordRef} className='form-control' id='password-input' type='password' name='password' placeholder='Min 6 characters' onChange={ (evt) => evt.target.value.length >= 6 ? passwordRef.current.style = 'border: 2px solid green' : passwordRef.current.style = 'border: 2px solid red'} />
                <span className='text-danger'>{errorTextOnPassword}</span>
              </div>
              <button className='btn btn-light border align-self-center px-4 font-weight-bold' type='submit'>Login</button>
            </form>
            <p ref={loggedTextRef} className='text-center pt-4 h3 text-success d-none'>Logged in successfully!</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
