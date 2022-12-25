import { useState } from "react";
import Menu from "../../../../components/Menu";

export default function createProfile() {
  const Profile = {
    name: "",
    lastname: "",
    email: "",
    password: "",
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [profile, setProfile] = useState(Profile);

  function onChange(event) {
    const { name, value } = event.target;

    setProfile({ ...profile, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(profile);
  }

  return (
    <>
      <Menu />

      <div className="container px-4 py-5">
        <div className="d-flex align-items-center p-3 my-3 text-white bg-primary rounded shadow-sm">
          <i className="bi bi-chat-dots me-3"></i>
          <div className="lh-1">
            <h1 className="h6 mb-0 text-white lh-1">Access Profiles</h1>
          </div>
        </div>
      </div>

      <div className="container px-4 py-5">
        <form onSubmit={onSubmit} className="row g-3">
          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={onChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              onChange={onChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={onChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={onChange}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-save"></i> Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
