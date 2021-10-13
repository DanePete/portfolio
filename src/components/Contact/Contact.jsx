import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Contact() {
  return (
    <div className="container">
      <div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScTJZ0dcB0WmBqYtzqB8A9S7dt7fp07zZmhLAaZCj1nCKlEzw/viewform?embedded=true" width="640" height="947" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </div>
  );
}

export default Contact;
