import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlabalStyles } from './Styles/GobalStyles';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';
export const App = () => (
  <div>
    <GlabalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
);
