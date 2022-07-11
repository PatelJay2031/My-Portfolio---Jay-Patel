import React, { useState } from "react";

export const SearchBar = ({ fetchUserDetails }) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    
    fetchUserDetails(searchQuery);
  };
  return (
    <div>
      <input value={searchQuery} onChange={handleChange} />
    </div>
  );
};
