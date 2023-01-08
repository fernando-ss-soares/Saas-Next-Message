export default function Hero({ title, description }) {
  return (
    <>
      <h1 className="fw-light">{ title }</h1>
      <p className="lead text-muted">
        { description }
      </p>
    </>
  );
}
