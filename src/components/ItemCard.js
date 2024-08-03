import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';

const ItemCard = ({ post }) => {
  return (
    <div className="item-card">
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 100)}... <Link to={`/item/${post.id}`}>Read More</Link></p>
    </div>
  );
};

export default ItemCard;
