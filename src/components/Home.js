import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './actions';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';
import '../Styles.css';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home">
      {posts.map((post) => (
        <ItemCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
