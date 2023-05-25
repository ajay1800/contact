import { Dispatch, SetStateAction } from "react";
import { ContactResponse } from "../../../models/contactModal";

const ContactComponent = ({
  contactData,
  setOpenModal,
  deleteContactHandler,
  setEditId,
}: ContactComponentProps) => {
  return (
    // contact list condition
    <div className='w-screen flex justify-center items-center '>
      {!!contactData && contactData.length > 0 ? (
        <div className='w-full h-screen p-8'>
          <div className='flex flex-row justify-between my-5'>
            <div className='text-lg font-semibold'>
              <h2>Contact</h2>
            </div>
            <button
              className='bg-button text-white px-5 py-3 rounded-lg text-md font-medium'
              onClick={() => setOpenModal(true)}>
              Create Contact
            </button>
          </div>
          <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 overflow-y-scroll h-3/4 '>
            {contactData.map((data) => (
              <div
                key={data?.id}
                className='bg-white text-lg font-semibold flex justify-center items-center py-5'>
                <div className='w-3/4'>
                  <div>
                    <p>Name :</p>
                    <p>
                      {data?.firstName} {data?.lastName}
                    </p>
                  </div>
                  <div>
                    <p>Status :</p>
                    <p
                      className={`${
                        data?.status === "active"
                          ? "text-green-500 "
                          : "text-orange-500"
                      }`}>
                      {data?.status}
                    </p>
                  </div>
                  <div className='flex flex-row justify-between w-full py-3'>
                    <button
                      className='border-2 border-black px-5'
                      onClick={() => (setOpenModal(true), setEditId(data?.id))}>
                      Edit
                    </button>
                    <button
                      className='border-2 border-red-600 text-red-600 px-5'
                      onClick={() => {
                        deleteContactHandler(data?.id);
                      }}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // no data found component
        <div className='bg-white w-6/12 text-black h-2/4 flex justify-evenly items-center flex-col'>
          <h1 className='text-2xl w-4/5 '>
            No Contact found. Please add Contact from create contact button.
          </h1>
          <button
            className='bg-button w-4/12 h-1/5 rounded-lg text-2xl font-semibold'
            onClick={() => setOpenModal(true)}>
            Create
          </button>
        </div>
      )}
    </div>
  );
};

interface ContactComponentProps {
  contactData: ContactResponse[];
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  deleteContactHandler: (id: string) => void;
  setEditId: Dispatch<SetStateAction<string | null>>;
}

export default ContactComponent;
