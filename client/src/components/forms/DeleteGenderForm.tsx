import { Link } from "react-router-dom";

const DeleteGenderForm = () => {
  return (
    <>
      <div className="form-group">
        <div className="mb3">
          <label htmlFor="gender">Delete</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
          />
        </div>
        <div className="d-flex justify-content-end">
          <Link to={"/"} className="btn btn-secondary me-1">
            No
          </Link>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteGenderForm;
