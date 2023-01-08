export default function Form({ onSubmit, onChange, placeholder }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <select
            className="form-select"
            id="inputGroupSelect02"
            name="typeSearch"
            onChange={onChange}
          >
            <option value="All" defaultValue>
              All
            </option>
            <option value="People">People</option>
            <option value="Documents">Documents</option>
            <option value="ID">ID</option>
            <option value="Email">Email</option>
          </select>
          <input
            type="text"
            className="input-group-text form-control text-start bg-light"
            name="value"
            onChange={onChange}
            htmlFor="inputGroupSelect02"
            placeholder={`Search ${placeholder}`}
          />
        </div>
      </form>
    </div>
  );
}
