import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ContactAddComponent from "./contactAddComponent";
import {
  addContactAction,
  editContactAction,
} from "../../../redux/actions/contactActions";
import { connect } from "react-redux";
import { ContactPayload, ContactResponse } from "../../../models/contactModal";
import { RootState } from "../../../redux/store";

const ContactAddContainer = ({
  setOpenModal,
  addContactAction,
  editContactAction,
  editId,
  contact,
}: ContactAddContainerProps) => {
  const [contactData, setContactData] = useState<ContactResponse>();
  // add contact handler function
  const addContactHandler = (payload: ContactPayload) => {
    setOpenModal(false);
    addContactAction(payload);
  };

  // edit contact handler function
  const editContactHandler = (id: string, payload: ContactPayload) => {
    setOpenModal(false);
    editContactAction({
      id,
      firstName: payload.firstName,
      lastName: payload.lastName,
      status: payload.status,
    });
  };

  // set data for prefill
  useEffect(() => {
    const data = contact.find((item) => item.id === editId);
    setContactData(data);
  }, [editId, contact]);

  return (
    <ContactAddComponent
      setOpenModal={setOpenModal}
      addContactData={addContactHandler}
      editContactData={editContactHandler}
      editId={editId}
      contactData={contactData}
    />
  );
};

// setting interface
interface ContactAddContainerProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  addContactAction: (payload: ContactPayload) => void;
  editContactAction: (payload: ContactResponse) => void;
  editId: string | null;
  contact: ContactResponse[];
}

// redux dispatch and action
const mapStateToProps = (state: RootState) => {
  return {
    contact: state.contact.contact,
  };
};

const mapDispatchToProps = {
  addContactAction,
  editContactAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactAddContainer);
