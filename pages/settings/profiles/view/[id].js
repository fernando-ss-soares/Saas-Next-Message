import { useRouter } from "next/router";
import request from "../../../../api.config";
import axios from "axios";
import Menu from "../../../../components/Menu";
import { Alert } from "../../../../components/Toast";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

export default function viewProfile() {
  const router = useRouter;

  const { id } = router().query;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [viewUser, setViewUSer] = useState();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const URL_NEXT_API = `${request.endpoint}${request.routes.searchUser}`;
    const storageUser = JSON.parse(localStorage.getItem("Next_User"));
    const storageToken = storageUser?.Token;

    axios
      .get(URL_NEXT_API, {
        headers: {
          Authorization: "Bearer " + `${storageToken}`,
        },
      })
      .then((response) => {
        const { data } = response;

        data.Message.Users.forEach((element) => {
          if (id == element?.next_id) {
            setViewUSer(element);
          }
        });
      })
      .catch(() => {});
  }, [id]);

  function onChange(event) {
    const { name, value } = event.target;

    setProfile({ ...profile, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
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
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-save"></i> Save
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </>
  );
}
