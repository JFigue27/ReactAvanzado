import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';
// import { categories as mockCategories } from '../../../api/db.json';

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(function name(params) {
    window
      .fetch('https://petgram-server-jjfigueroa.jjfigueroa.now.sh/categories')
      .then(resp => resp.json())
      .then(respons => {
        setCategories(respons);
      });
  }, []);

  return (
    <List>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};
