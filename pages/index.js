import { useRouter } from 'next/router';
import { useState } from 'react';

export default function App() {
  
  const User = {
    user: '',
    password: ''
  }

  const router = useRouter();
  const [ user, setUser ] = useState(User);

  function onChange(event) {
    const { name, value } = event.target;
    setUser({ ...user,[name]:value });
  }

  function onSubmit(event) {
    event.preventDefault();
    router.push('/home');
  }

  const date = new Date;

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-itens-center text-center vh-100">

        <main className="form-signin w-100 m-auto">
          <form onSubmit={onSubmit} className='container w-100'>
            <i style={{ fontSize: '64px' }} className='bi bi-chat-left-dots-fill'></i>  
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

              <div className="form-floating py-1">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='user' autoComplete={false} onChange={onChange} />
                  <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating py-1">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' autoComplete={false} onChange={onChange} />
                  <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"/> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
              <p className="mt-5 mb-3 text-muted">{ date.getFullYear() }</p>
          </form>
        </main>
      </div>
    </>
  )
}
