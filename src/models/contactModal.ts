// contact api payload
export interface ContactPayload {
  firstName: string;
  lastName: string;
  status: string;
}

// contact api response
export interface ContactResponse {
  firstName: string;
  lastName: string;
  status: string;
  id: string;
}
