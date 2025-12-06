import React, { JSX } from 'react';

export default function AuthButton(): JSX.Element {
  return (
    <button type="button" onClick={() => alert('Auth button clicked!')}>
      Login
    </button>
  );
}
