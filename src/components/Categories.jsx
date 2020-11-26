import React, { useState } from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className='categories'>
      <ul>
        <li onClick={() => setActiveItem(null)} className={activeItem === null ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => setActiveItem(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
