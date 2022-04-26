import React from "react";
import { capitalize } from "../../../utils/utils";
// import Loading from "../../loading";

const BlogList = ({ category }) => {
  // if (loading) return <Loading />;
  return (
    <>
      <h1>{capitalize(category)}</h1>
    </>
  );
};

export default BlogList;
