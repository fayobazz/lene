import React from 'react';

const Button2 = ({ title, containerClass, phoneNumber }) => {
  return (
    <a href={`tel:${phoneNumber}`} className={containerClass}>
      <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
        {title}
      </button>
    </a>
  );
};

export default Button2;