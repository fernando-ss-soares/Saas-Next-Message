import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { Alert } from "../../../../components/Toast";
import { Toaster } from 'react-hot-toast';
import request from "../../../../api.config";
import Menu from "../../../../components/util/Menu";

export default function createProfile() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

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

    const URL_NEXT_API = `${request.endpoint}${request.routes.createUser}`;

    axios
      .post(URL_NEXT_API, {
        name: profile.name,
        lastname: profile.lastname,
        email: profile.email,
        password: profile.password,
      })
      .then(() => {
        Alert.notifySucess("User successfully created!");

        setTimeout(() => {
          router.push("/settings/profiles");
        }, 2000);
      })
      .catch(() => {
        Alert.notifyError("Unable to register user. Reason: Error in request");
      });
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
              name="name"
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
              name="lastname"
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
              name="email"
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
              name="password"
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
      <Toaster/>
    </>
  );
}
