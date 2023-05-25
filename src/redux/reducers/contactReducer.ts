import { contactData } from "../../contactData";
import { ContactResponse } from "../../models/contactModal";
import { ContactAction, ContactActionTypes } from "../actions/contactActions";

interface ContactReducerState {
  contact: ContactResponse[];
}

const initialReducerState: ContactReducerState = {
  contact: contactData,
};

export default function ContactReducer(
  state: ContactReducerState = initialReducerState,
  action: ContactAction
) {
  switch (action.type) {
    case ContactActionTypes.ADD_CONTACT_SUCCESS:
      return {
        contact: state.contact.concat(action.payload),
      };
    case ContactActionTypes.DELETE_CONTACT_SUCCESS:
      return {
        contact: state.contact.filter((item) => item.id !== action.payload),
      };
    case ContactActionTypes.EDIT_CONTACT_SUCCESS:
      state.contact.map((item) => {
        if (item.id === action.payload.id) {
          item.firstName = action.payload.firstName;
          item.lastName = action.payload.lastName;
          item.status = action.payload.status;
        }
      });
      return {
        ...state,
      };

    default:
      return state;
  }
}
