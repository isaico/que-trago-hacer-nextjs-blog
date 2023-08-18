import React from 'react';
//pagina que mostrara el trago y su receta
//por el momento solo muestra el titulo que se obtiene por el parametro pero debo usar ese params para buscarlo en la db
const PageTitle = ({params}) => {
  return (
    <div>
      page title: 
      <p>{params.title}</p>
    </div>
  );
}

export default PageTitle;
