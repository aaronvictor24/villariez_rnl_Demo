const EditGenderForm = () => {
  return (
    <>
      <div className="form-group">
        <div className="mb3">
          <label htmlFor="gender">Edit Gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
          />
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-secondary">
              Back
            </button>
            <button type="submit" className="btn btn-succes">
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditGenderForm;
