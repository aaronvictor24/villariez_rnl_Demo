import { useState } from "react";
import AlertMessage from "../../components/AlertMessage";
import AddGenderForm from "../../components/forms/gender/AddGenderForm";
import GendersTable from "../../components/tables/gender/GendersTable";
import MainLayout from "../layout/MainLayout";

const Genders = () => {
  const [refreshGenders, setRefreshGenders] = useState(false);

  const [message, setMessage] = useState("");
  const [isSuccess, setisSuccess] = useState(false);
  const [isVisible, setisVisible] = useState(false);

  const handleShowAlertMessage = (
    message: string,
    isSuccess: boolean,
    isVisible: boolean
  ) => {
    setMessage(message);
    setisSuccess(isSuccess);
    setisVisible(isVisible);
  };

  const handleCloseAlterMessage = () => {
    setMessage("");
    setisSuccess(false);
    setisVisible(false);
  };

  const content = (
    <>
      <AlertMessage
        message={message}
        isSuccess={isSuccess}
        isVisible={isVisible}
        onClose={handleCloseAlterMessage}
      />
      <div className="row">
        <div className="col-md-4">
          <AddGenderForm
            onGenderAdded={(message) => {
              handleShowAlertMessage(message, true, true);
              setRefreshGenders(!refreshGenders);
            }}
          />
        </div>
        <div className="col-md-8">
          <GendersTable refreshGenders={refreshGenders} />
        </div>
      </div>
    </>
  );
  return <MainLayout content={content} />;
};

export default Genders;
