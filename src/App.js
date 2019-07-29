import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlabalStyle } from './Styles/GobalStyles';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';
export const App = () => (
  <div>
    <GlabalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
);
