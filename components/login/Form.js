export default function Form({ onSubmit, onChange }) {
    
    const dateYear = new Date().getFullYear;
    
    return (
        <form onSubmit={onSubmit} className="container w-100">
            <i
              style={{ fontSize: "64px" }}
              className="bi bi-chat-left-dots-fill"
            ></i>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating py-1">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="user"
                autoComplete="false"
                onChange={onChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating py-1">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
                autoComplete="false"
                onChange={onChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox my-3" />

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">{dateYear}</p>
          </form>
    )
}