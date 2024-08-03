import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../Styles.css';

const ItemDetail = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.find((p) => p.id === parseInt(id)));

  if (!post) return <p>Post not found</p>;

  return (
    <div className="item-detail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>User ID: {post.userId}</p>
    </div>
  );
};

export default ItemDetail;
