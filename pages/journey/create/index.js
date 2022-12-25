import { useState } from "react";
import dynamic from "next/dynamic";

/**
 *
 * Edit Quill
 *
 * */

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../../../node_modules/react-quill/dist/quill.snow.css";

import Menu from "../../../components/Menu";

export default function JourneyCreate() {
  const [value, setValue] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    console.log("logou");
  }

  return (
    <>
      <Menu />

      <div className="container px-4 py-5">
        <div className="d-flex align-items-center p-3 my-3 text-white bg-primary rounded shadow-sm">
          <i className="bi bi-chat-dots me-3"></i>
          <div className="lh-1">
            <h1 className="h6 mb-0 text-white lh-1">Journey</h1>
          </div>
        </div>
      </div>

      <div className="container px-4 py-5">
        <form onSubmit={onSubmit} className="row g-3">
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Journey Name
            </label>
            <input type="text" className="form-control" id="inputAddress" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Description
            </label>
            <input type="text" className="form-control" id="inputAddress2" />
          </div>
          <div className="col-12">
            <ReactQuill theme="snow" value={value} onChange={setValue} />
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
