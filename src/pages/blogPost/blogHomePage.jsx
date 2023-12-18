import React, { useEffect } from "react";
import axios from "axios";

import "./styles.css";
import NavBar from "../../components/Navbar/Navbar";
import Loading from "../loading.jsx";

import { capitalize, refeactorUrlPath } from "../../utils/utils";
import { API } from "../../config/api";
import CategoryCard from "../../components/Card/PostCard.jsx";

const BlogHomePage = () => {
  const baseUrl = API + "/categories";
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [categories, setCategories] = React.useState([]);

  const getData = React.useCallback(() => {
    axios.get(baseUrl).then((response) => {
      const tempData = response.data.data.categories;
      setData(tempData);
    });
  }, [baseUrl]);

  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, [getData]);
  useEffect(() => {
    if (data) {
      setCategories(data?.map((item) => item.category));
    }
  }, [data]);

  if (loading) return <Loading />;
  return (
    <>
      <NavBar />
      <div className="categoryCardContainer">
        {categories.map((cat, index) => {
          const path = `/blog/${refeactorUrlPath(cat)}`;
          return (
            <CategoryCard path={path} key={index}>
              {capitalize(cat)}
            </CategoryCard>
          );
        })}
      </div>
    </>
  );
};

export default BlogHomePage;
