import styles from "../../components/Menu.module.css";
import Card from "./Card";
import Hero from "./Hero";
import Title from "./Title";

export default function componentHome() {
  const data = [
    {
      id: 1,
      title: "Journey",
      description:
        "Paragraph of text beneath the heading to explain the heading",
    },
    {
      id: 2,
      title: "Documents",
      description:
        "Paragraph of text beneath the heading to explain the heading",
    },
    {
      id: 3,
      title: "Reports",
      description:
        "Paragraph of text beneath the heading to explain the heading",
    },
    {
      id: 4,
      title: "Settings",
      description:
        "Paragraph of text beneath the heading to explain the heading",
    },
  ];

  return (
    <div className="container-sm px-4 py-5 d-flex flex-column">
      <Title title="Next Message" />

      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <Hero />
        <div id={styles.mobile} className="row row-cols-1 row-cols-sm-2 g-4">
          {data.map((data) => (
            <Card
              key={data.id}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
