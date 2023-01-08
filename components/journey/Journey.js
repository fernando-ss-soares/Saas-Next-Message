import { useState } from "react";
import Link from "next/link";
import Menu from "../../components/Menu";
import Title from "./Title";
import Table from "./Table";
import Form from "./Form";

export default function componentJourney() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [JourneySearch, setJourneySearch] = useState("");

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Menu />

      <div className="container px-4 py-5">
        <Title title="Journey" />
        <Link href="journey/create">
          <button type="button" className="btn btn-primary">
            <i className="bi bi-plus-circle me-3"></i> Journey
          </button>
        </Link>
      </div>

      <div className="container px-4 py-1">
        <Form onSubmit={onSubmit} search={setJourneySearch} />
      </div>

      <div className="container px-4 py-2">
        <Table search={JourneySearch} />
      </div>
    </>
  );
}
