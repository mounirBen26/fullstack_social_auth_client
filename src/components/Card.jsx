import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({post}) => {
    return(
        <div className="card">
            <Link className='link' to={`/post/${post.id}`}>
            <span className="title">{post.title}</span>
            <img src={post.image} alt="image" className="img" />
            <p className="description">{post.description}</p>
            <button className="cardBtn">Read More</button>
            </Link>
        </div>
    )
}
export default Card;
