import React from "react";
import { capitalize } from "../../../utils/utils";

const BlogList = ({ category }) => {
  return (
    <>
      <h1>{capitalize(category)}</h1>
    </>
  );
};

export default BlogList;
