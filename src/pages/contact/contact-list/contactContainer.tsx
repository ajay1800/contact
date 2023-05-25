import { useEffect, useState } from "react";
import ContactComponent from "./contactComponent";
import ContactAddContainer from "../contact-add/contactAddContainer";
import { ContactResponse } from "../../../models/contactModal";
import { RootState } from "../../../redux/store";
import { connect } from "react-redux";
import { deleteContactAction } from "../../../redux/actions/contactActions";

const ContactContainer = ({
  contact,
  deleteContactAction,
}: ContactContainerProps) => {
  // state setting up
  const [contactData, setContactData] = useState<ContactResponse[]>([]);
  const [openAddModal, setOpenModal] = useState<boolean>(false);
  const [editId, setEditId] = useState<string | null>(null);

  // set data from redux
  useEffect(() => {
    contact && setContactData(contact);
  }, [contact]);

  // delete contact handler
  const deleteContactHandler = (id: string) => {
    deleteContactAction(id);
  };
  return (
    <>
      <ContactComponent
        contactData={contactData}
        setOpenModal={setOpenModal}
        deleteContactHandler={deleteContactHandler}
        setEditId={setEditId}
      />
      {openAddModal && (
        <ContactAddContainer setOpenModal={setOpenModal} editId={editId} />
      )}
    </>
  );
};

//interface of contact list page
interface ContactContainerProps {
  contact: ContactResponse[];
  deleteContactAction: (payload: string) => void;
}

const mapStateToProps = (state: RootState) => {
  return {
    contact: state.contact.contact,
  };
};

const mapDispatchToProps = {
  deleteContactAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);
