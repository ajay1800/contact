import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ContactPayload, ContactResponse } from "../../../models/contactModal";

const ContactAddComponent = ({
  setOpenModal,
  addContactData,
  editId,
  editContactData,
  contactData,
}: ContactAddComponentProps) => {
  // contact input state
  const [input, setInput] = useState<ContactPayload>({
    firstName: "",
    lastName: "",
    status: "",
  });

  //contact add function

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      id: `${Math.random()}`,
      ...input,
    };
    addContactData(data);
  };

  // contact edit function
  const editContact = (e: any) => {
    e.preventDefault();
    editId && editContactData(editId, input);
  };

  // prefill input data for edit contact
  useEffect(() => {
    if (contactData) {
      setInput({
        firstName: contactData?.firstName,
        lastName: contactData?.lastName,
        status: contactData?.status,
      });
    }
  }, [contactData]);

  return (
    //contact form modal
    <div className='absolute w-screen h-screen bg-overlay flex justify-center items-center'>
      <div className='bg-white w-2/5 h-4/5'>
        <div className='m-8 flex h-4/5 flex-col justify-between'>
          <div className='flex justify-between flex-row text-xl font-bold'>
            <h2>{editId ? "Edit" : "Create"} Contact</h2>
            <button onClick={() => setOpenModal(false)}>X</button>
          </div>
          <form
            className='flex flex-col h-4/5 justify-between text-xl font-semibold '
            onSubmit={(e) => {
              editId ? editContact(e) : handleSubmit(e);
            }}>
            <div className='flex flex-col justify-between'>
              <label>First Name</label>
              <input
                type='text'
                className='border-2 border-black p-2 font-normal mt-2'
                placeholder='First Name'
                value={input.firstName}
                onChange={(e) =>
                  setInput({
                    ...input,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className='flex flex-col justify-between'>
              <label>Last Name</label>
              <input
                type='text'
                className='border-2 border-black p-2 font-normal mt-2'
                placeholder='Last Name'
                value={input.lastName}
                onChange={(e) =>
                  setInput({
                    ...input,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
            <div className='flex flex-col justify-between'>
              <label>Status</label>
              <div className='flex flex-row mt-2'>
                <input
                  type='radio'
                  id='active'
                  name='status'
                  value={"active"}
                  checked={input.status === "active"}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      status: e.target.value,
                    })
                  }
                />

                <label htmlFor='active' className='mx-3'>
                  Active
                </label>
                <input
                  type='radio'
                  id='inactive'
                  name='status'
                  value={"inactive"}
                  checked={input.status === "inactive"}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      status: e.target.value,
                    })
                  }
                />
                <label htmlFor='inactive' className='mx-3'>
                  Inactive
                </label>
              </div>
            </div>
            <div className='flex flex-row justify-between'>
              <button
                className='bg-green-600 text-white w-4/12 rounded-lg text-lg font-semibold px-5 py-3'
                type='submit'>
                Save
              </button>
              <button
                className='bg-red-600 text-white w-4/12 rounded-lg text-lg font-semibold px-5 py-3'
                onClick={() => setOpenModal(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

interface ContactAddComponentProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  addContactData: (payload: ContactPayload) => void;
  editContactData: (id: string, payload: ContactPayload) => void;
  editId: string | null;
  contactData: ContactResponse | undefined;
}
export default ContactAddComponent;
