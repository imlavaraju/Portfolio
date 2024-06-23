import React from "react";
import { SlBookOpen } from "react-icons/sl";
import { GiNotebook } from "react-icons/gi";

const Education = () => {
  const myeducation = [
    {
      name: "Rajiv Gandhi University of Knowledge Technologies , IIIT Ongole",
      course: "Mechanical Engineering , B.Tech",
      year: "2020-2024",
      cgpa: "8.6",
    },
    {
      name: "Rajiv Gandhi University of Knowledge Technologies , IIIT Ongole",
      course: "Pre University Course",
      year: "2018-2020",
      cgpa: "8.01",
    },
    {
      name: "Zilla Parishad High School , Rowthulapudi Mandal, AP.",
      course: "SSC 10th ",
      year: "2017-2018",
      cgpa: "10.00",
    },
  ];
  return (
    <div className="education">
      <h4>
        <SlBookOpen style={{ textAlign: "center", marginRight: "6px" }} />
        Education
      </h4>
      {myeducation.map((Education) => (
        <div className="eacheducation">
          <div>
            <h2>
              <GiNotebook style={{ marginRight: "10px", fontSize: "26px" }} />

              {Education.name}
            </h2>
            <h3>{Education.course}</h3>
            <h5>{Education.year}</h5>
            <h6>{Education.cgpa}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
