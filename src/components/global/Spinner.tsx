import React from 'react';
export default function Spinner() {
  return (
    <div className="loadingSpinnerContainer text-center flex justify-center items-center h-screen w-full bg-white">
      <div className="loadingSpinner"></div>
    </div>
  );
}
