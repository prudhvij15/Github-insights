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
  return (
    <GithubCOntext.Provider value={{ githubUser, gitRepos, followers }}>
      {children}
    </GithubCOntext.Provider>
  );
};

export { GithubProvider, GithubCOntext };
