export default function Title({ title }) {
  return (
    <div className="d-flex align-items-center p-3 my-3 text-white bg-primary rounded shadow-sm">
      <i className="bi bi-pie-chart me-3" width="48" height="38"></i>
      <div className="lh-1">
        <h1 className="h6 mb-0 text-white lh-1">{ title }</h1>
      </div>
    </div>
  );
}
