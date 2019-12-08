import React, { useState } from 'react';
import MovieList from '../MovieList';
import Cover from '../Cover';
import '../../style/Home.css';

export default function Home() {
  return (
    <div>
      <Cover />
      <MovieList type="now_playing" />
      <MovieList type="top_rated" />
    </div>
  );
}
