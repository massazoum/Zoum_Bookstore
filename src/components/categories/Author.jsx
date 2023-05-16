import React from 'react';
import { useSelector } from 'react-redux';
// import catogoriesSlice from '../../redux/categories/catogoriesSlice';

function Categorie() {
  const page = useSelector((state) => state.categories.categories);
  return (
    <div>
      {page}
    </div>
  );
}

export default Categorie;
