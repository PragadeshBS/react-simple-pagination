import React from "react";

const Content = ({ data }) => {
  return (
    <>
      {data &&
        data.map((d) => {
          return <p key={d}>{d}</p>;
        })}
    </>
  );
};

export default Content;
