import React, { Fragment, useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';
// import { categories as mockCategories } from '../../../api/db.json';

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  const [showFixed, setShowFixed] = useState(false);

  useEffect(function() {
    window
      .fetch('https://petgram-server-jjfigueroa.jjfigueroa.now.sh/categories')
      .then(resp => resp.json())
      .then(respons => {
        setCategories(respons);
      });
  }, []);

  useEffect(
    function() {
      const onScroll = e => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };

      document.addEventListener('scroll', onScroll);
      return () => document.removeEventListener('scroll', onScroll);
    },
    [showFixed]
  );

  const renderList = fixed => (
    <List fixed={fixed}>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};
