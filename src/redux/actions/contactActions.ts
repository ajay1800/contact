import { ContactPayload, ContactResponse } from "../../models/contactModal";
import { AppDispatch } from "../store";

export enum ContactActionTypes {
  ADD_CONTACT_SUCCESS = "[CONTACT] Add Contact Success",
  ADD_CONTACT_FAILURE = "[CONTACT] Add Contact Failure",
  DELETE_CONTACT_SUCCESS = "[CONTACT] Delete Contact Success",
  DELETE_CONTACT_FAILURE = "[CONTACT] Delete Contact Failure",
  EDIT_CONTACT_SUCCESS = "[CONTACT] Edit Contact Success",
  EDIT_CONTACT_FAILURE = "[CONTACT] Edit Contact Failure",
}

export interface ContactAction {
  type: ContactActionTypes;
  payload?: any;
}

// add contact action
export const addContactAction = (payload: ContactPayload) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(addContactSuccessAction(payload));
    } catch (error: any) {
      dispatch(addContactFailureAction());
    }
  };
};

export const addContactSuccessAction = (payload: any) => {
  return {
    type: ContactActionTypes.ADD_CONTACT_SUCCESS,
    payload,
  };
};

export const addContactFailureAction = () => {
  return {
    type: ContactActionTypes.ADD_CONTACT_FAILURE,
  };
};

//delete contact action

export const deleteContactAction = (payload: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(deleteContactSuccessAction(payload));
    } catch (error: any) {
      dispatch(deleteContactFailureAction());
    }
  };
};

export const deleteContactSuccessAction = (payload: string) => {
  return {
    type: ContactActionTypes.DELETE_CONTACT_SUCCESS,
    payload,
  };
};

export const deleteContactFailureAction = () => {
  return {
    type: ContactActionTypes.DELETE_CONTACT_FAILURE,
  };
};

//edit contact action

export const editContactAction = (payload: ContactResponse) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(editContactSuccessAction(payload));
    } catch (error: any) {
      dispatch(editContactFailureAction());
    }
  };
};

export const editContactSuccessAction = (payload: any) => {
  return {
    type: ContactActionTypes.EDIT_CONTACT_SUCCESS,
    payload,
  };
};

export const editContactFailureAction = () => {
  return {
    type: ContactActionTypes.EDIT_CONTACT_FAILURE,
  };
};
