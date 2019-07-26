import React from 'react';
import { ImageWrapper, Img, Button } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <acticle>
      <a href={`/detail/${id}`}>
        <ImageWrapper>
          <Img src={src} />
        </ImageWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px' /> {likes} likes!
      </Button>
    </acticle>
  );
};
