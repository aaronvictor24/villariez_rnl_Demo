import { useRef, useState } from "react";
import DeleteUserForm from "../forms/user/DeleteUserForm";
import AlertMessage from "../AlertMessage";
import SpinnerSmall from "../SpinnerSmall";
import { Users } from "../../interfaces/Users";

interface DeleteUserModalProps {
  showModal: boolean;
  user: Users | null;
  onRefreshUsers: (refresh: boolean) => void;
  onClose: () => void;
}

const DeleteUserModal = ({
  showModal,
  user,
  onRefreshUsers,
  onClose,
}: DeleteUserModalProps) => {
  const submitFormRef = useRef<() => void | null>(null);

  const [refreshUsers, setRefreshUsers] = useState(false);
  const [loadingDestroy, setLoadingDestroy] = useState(false);

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

  return (
    <>
      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Edit User</h1>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <AlertMessage
                  message={message}
                  isSuccess={isSuccess}
                  isVisible={isVisible}
                  onClose={handleCloseAlterMessage}
                />
              </div>
              <p className="fs-4">Are you sure you want to delete this user?</p>
              <DeleteUserForm
                user={user}
                setSubmitForm={submitFormRef}
                setLoadingDestroy={setLoadingDestroy}
                onDeleteUser={(message) => {
                  handleShowAlertMessage(message, true, true);
                  setRefreshUsers(!refreshUsers);
                  onRefreshUsers(refreshUsers);
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                disabled={loadingDestroy}
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                disabled={loadingDestroy}
                onClick={() => submitFormRef.current?.()}
              >
                {loadingDestroy ? (
                  <>
                    <SpinnerSmall /> Deleting user...
                  </>
                ) : (
                  "Delete User"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteUserModal;
