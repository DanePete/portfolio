import React from 'react';
/* First import the API category from Amplify */
import { API } from 'aws-amplify';

/* Next, import the createContact mutation */
import { createContact } from '../../graphql/mutations';

/* For a dynamic form, create some local state to hold form input. This is pseudocode and will differ based on your JavaScript framework. */
const formState = { name: '', phone: '' };

/* Create a function to update the form state. This is pseudocode and will differ based on your JavaScript framework.  */
function updateFormState(key, value) {
  formState[key] = value;
}

/* Create a function that will create a new contact */
async function submitNewContact() {
  try {
    await API.graphql({
      query: createContact,
      variables: {
        input: {
          name: formState.name,
          phone: formState.phone
        }
      }
    })
    console.log('New contact created!');
  } catch (err) {
    console.log({ err });
  }
}


function Contact() {
  return (
    <div className="container">
      /* Create the form inputs and button in the UI */
      <input placeholder="phone" onChange={e => updateFormState('phone', e.target.value)} />
      <input placeholder="name" onChange={e => updateFormState('name', e.target.value)} />
      <button onClick={submitNewContact}>Create New Contact</button>
    </div>
  );
}

export default Contact;
