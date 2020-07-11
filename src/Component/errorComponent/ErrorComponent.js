import React from 'react';

function ErrorComponent({ code }) {
  let content = null;
  if (code === 402) {
    content = `The daily API limit has expired. Please contact`;
  } else {
    content = `We're so sorry, something went wrong. If this error persists, please
        contact`;
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h3 data-testid="text-elememt">
        {content} <br />{' '}
        <a data-testid="link-elememt" href="https://pramitbarua.com/">
          the website manager
        </a>
      </h3>
    </div>
  );
}

export default ErrorComponent;
