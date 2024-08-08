import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Inline styles for the sidebar
const sidebarStyle = {
  width: '250px',
  backgroundColor: '#f4f4f4',
  padding: '20px',
  boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
};

// Inline styles for star icons
const starStyle = {
  fontSize: '20px',
  color: '#ddd' // Default color for empty stars
};

const filledStarStyle = {
  ...starStyle,
  color: '#000' // Color for filled stars
};

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const ratings = query.getAll('rating');
    const sort = query.get('order');
    setSelectedRatings(ratings);
    setSortOrder(sort);
  }, [location.search]);

  const handleRatingChange = (rating) => {
    const newRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter(r => r !== rating)
      : [...selectedRatings, rating];
    updateUrl({ rating: newRatings });
  };

  const handleSortChange = (order) => {
    updateUrl({ order });
  };

  const updateUrl = (params) => {
    const newQuery = new URLSearchParams(location.search);
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        newQuery.delete(key);
        value.forEach(v => newQuery.append(key, v));
      } else {
        newQuery.set(key, value);
      }
    });
    navigate(`?${newQuery.toString()}`);
  };

  return (
    <div style={sidebarStyle}>
      <p>Filter By Rating</p>
      {[1, 2, 3, 4, 5].map(star => (
        <div key={star}>
          <label>
            <input
              type="checkbox"
              checked={selectedRatings.includes(star.toString())}
              onChange={() => handleRatingChange(star.toString())}
            />
            <span style={filledStarStyle}>
              {'★'.repeat(star) + '☆'.repeat(5 - star)}
            </span>
          </label>
        </div>
      ))}
      <p>Sort By</p>
      <div>
        <label>
          <input
            type="radio"
            name="sort"
            checked={sortOrder === 'asc'}
            onChange={() => handleSortChange('asc')}
          />
          Ascending
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="sort"
            checked={sortOrder === 'desc'}
            onChange={() => handleSortChange('desc')}
          />
          Descending
        </label>
      </div>
    </div>
  );
};

export default SideBar;




