import DeleteGenderForm from "../../components/forms/DeleteGenderForm";
import MainLayout from "../layout/MainLayout";

const DeleteGender = () => {
  const content = (
    <div className="d-flex justify-content-center">
      <div className="col-md4">
        <DeleteGenderForm />
      </div>
    </div>
  );
  return <MainLayout content={content} />;
};

export default DeleteGender;
