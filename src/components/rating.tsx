import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import React from 'react';
import { ProductRatingProps } from '../interface';

export const  ProductRating : React.FC<ProductRatingProps> =({productRating})=> {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={productRating} precision={0.1} readOnly />
    </Stack>
  );
}