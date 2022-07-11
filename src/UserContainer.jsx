import React, { useState } from "react";
import axios from "axios";
import { SearchBar } from "./SearchBar";
import { DisplayUserComponent } from "./DisplayUserComponent";

const configObj = {
  client_id: "",
  client_secret: "",
  repos_count: 5,
  repos_sort: "created: asc",
  token: ""
};

export const UserContainer = () => {

  const [userData, setUserData] = useState({});
  const fetchUserDetails = async (searchKey) => {
  
    const {
      data
    } = await axios.get(
      `https://api.github.com/users/${searchKey}?client_id=${configObj.client_id}&client_secret=${configObj.client_secret}`,
      { headers: { Authorization: configObj.token } }
    );
    setUserData(data);

  };

  return (
    <div>
      <SearchBar fetchUserDetails={fetchUserDetails} />
      <DisplayUserComponent userData={userData} />
    </div>
  );
};
