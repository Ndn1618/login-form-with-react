import './App.css';

function App() {
  return (
    <>
      <div className='theme theme--light'>
        <h1 className='sr-only'>Login Form with React.js</h1>

        <section className='py-5 login-from-section'>
          <div className="login-form-wrapper container p-5 rounded">
            <h2 className='text-center mb-3'>User Login</h2>
            <form className='d-flex flex-column justify-content-center bg-light shadow-lg p-4 rounded' action='https://echo.htmlacademy.ru' method='POST'>
              <label className='h5' htmlFor='username-input'>Username</label>
              <input className='form-control mb-4' id='username-input' type='text' name='username' placeholder='Username' autoComplete='off' />
              <label className='h5' htmlFor='password-input'>Password</label>
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
