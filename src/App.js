import './App.css';

function App() {
  return (
    <>
      <div className='theme theme--dark'>
        <h1 className='sr-only'>Login Form with React.js</h1>

        <section className='py-5 login-from-section'>
          <div className="login-form-wrapper container p-5 rounded">
            <h2 className='text-center mb-3 text-light'>User Login</h2>
            <form className='login-form d-flex flex-column justify-content-center p-4 rounded' action='https://echo.htmlacademy.ru' method='POST'>
              <label className='label h5 rounded' htmlFor='username-input'>Username</label>
              <input className='form-control mb-4' id='username-input' type='text' name='username' placeholder='Username' autoComplete='off' />
              <label className='label h5 rounded' htmlFor='password-input'>Password</label>
              <input className='form-control mb-4' id='password-input' type='password' name='password' placeholder='Password' />
              <button className='btn btn-light border align-self-center px-4 font-weight-bold' type='submit'>Login</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
