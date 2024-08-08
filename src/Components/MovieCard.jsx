import React from 'react';

// Inline styles for the movie card
const cardStyle = {
  border: '1px solid #ddd',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  width: '250px',
  margin: '10px',
  backgroundColor: '#fff',
  textAlign:'center',
  cursor:'pointer',
};

const imgStyle = {
  width: '100%',
  height: 'auto'
};

const contentStyle = {
  padding: '10px'
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 10px 0'
};

const descriptionStyle = {
  fontSize: '14px',
  color: '#666',
  margin: '0 0 10px 0'
};

const ratingStyle = {
  fontSize: '16px',
  color: '#f39c12'
};

function MovieCard({ image, title, year, type, rating }) {
  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imgStyle} />
      <div style={contentStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{year}</p>
        <p style={descriptionStyle}>{type}</p>
        <p >Rating: {rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;
