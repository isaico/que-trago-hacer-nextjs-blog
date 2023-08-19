import React from 'react';
//cargare los post desde la api local con el params id como prametro
const Page = ({params}) => {
  return (
    <div>
      <p>{params.bebida}</p>
    </div>
  );
}

export default Page;
