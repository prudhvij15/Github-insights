import React, { useContext } from "react";
import styled from "styled-components";
import { GithubCOntext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { gitRepos } = useContext(GithubCOntext);
  let languages = gitRepos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    // console.log(language);
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});

  languages = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  const chartData = [
    {
      label: "HTML",
      value: "100",
    },
    {
      label: "CSS",
      value: "90",
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart data={chartData} /> */}
        <Pie3D data={languages} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
`;

export default Repos;
