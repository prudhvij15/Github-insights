import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubCOntext = React.createContext();
const GithubProvider = ({ children }) => {
  const [githubUser, setgithubUser] = useState(mockUser);
  const [gitRepos, setgitRepos] = useState(mockRepos);
  const [followers, setfollowers] = useState(mockFollowers);

  const updateGithubUser = (username) => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        // Assuming the response data contains user information
        const userData = response.data;
        console.log("User Data:", userData);
        setgithubUser(userData);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching user data:", error);
      });
  };
  console.log(githubUser);

  return (
    <GithubCOntext.Provider
      value={{ githubUser, gitRepos, followers, updateGithubUser }}
    >
      {children}
    </GithubCOntext.Provider>
  );
};

export { GithubProvider, GithubCOntext };
