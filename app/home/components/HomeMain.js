import HomeCard from "./HomeCard";

import "./HomeMain.scss";

const data = [
  {
    title: "CT AGUAS 230",
    city: "City 1",
    state: "State 1",
    project: "Project 1",
  },
  {
    title: "CT AGUAS 400",
    city: "City 2",
    state: "State 2",
    project: "Project 2",
  },
  {
    title: "CT ALMANZOR",
    city: "City 3",
    state: "State 3",
    project: "Project 3",
  },
  {
    title: "CT ANTIGUA DEPURADORA",
    city: "City 4",
    state: "State 4",
    project: "Project 4",
  },
  {
    title: "CT CASAS DE DON GOMEZ",
    city: "City 5",
    state: "State 5",
    project: "Project 5",
  },
  {
    title: "ET Supervisada Circutor",
    city: "City 6",
    state: "State 6",
    project: "Project 6",
  },
  {
    title: "Long long long long name",
    city: "City 7",
    state: "State 7",
    project: "Project 7",
  },
  {
    title: "mmmmmmmmmm mmmmmmmmmmmmmmmm",
    city: "City 8",
    state: "State 8",
    project: "Project 8",
  },
  {
    title: "long long long long long long lo",
    city: "City 9",
    state: "State 9",
    project: "Project 9",
  },
  {
    title: "Home Card 10",
    city: "City 10",
    state: "State 10",
    project: "Project 10",
  },
];

const HomeMain = () => {
  return (
    <div className="home-main">
      {[
        data.map((item) => (
          <HomeCard
            title={item.title}
            city={item.city}
            state={item.state}
            project={item.project}
          />
        )),
      ]}
    </div>
  );
};

export default HomeMain;
