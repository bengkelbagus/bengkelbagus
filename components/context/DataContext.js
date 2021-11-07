import { createContext, useContext, useEffect, useState } from "react";
import { BACKEND_URL } from "@/Utils/Constants";
import axios from "axios";
import { Heading } from "@chakra-ui/layout";
import { AnimatePresence, motion } from "framer-motion";
import { fetchData } from "@/Utils/Helper";

const initialData = {
  about: null,
  hero: null,
  highlightNews: null,
  latestNews: [],
  portofolio: [],
  productionStep: [],
  testimonial: [],
  projects: [],
  testimonials: [],
  blogs: [],
  categories: [],
};

const DataContext = createContext(initialData);

const DEF_DELAY = 1000;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms || DEF_DELAY));
}

export const DataProvider = ({ children }) => {
  const [landingPage, setLandingPage] = useState(null);
  const [projects, setProjects] = useState(null);
  const [testimonials, setTestimonials] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [categories, setCategories] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLandingPage();
    fetchProjects();
    fetchTestimonials();
    fetchBlogs();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setLoading(false);
      }, 10);
    }
  }, [progress]);

  const fetchLandingPage = async () => {
    const [data, error] = await fetchData("/landing-page");
    if (error) console.log(error);
    let count = 0;
    while (count < 20) {
      await sleep(50);
      setProgress((prev) => prev + 1);
      count++;
    }
    setLandingPage(data);
  };

  const fetchProjects = async () => {
    const [data, error] = await fetchData("/projects");
    if (error) console.log(error);
    let count = 0;
    while (count < 20) {
      await sleep(50);
      setProgress((prev) => prev + 1);
      count++;
    }
    setProjects(data);
  };

  const fetchTestimonials = async () => {
    const [data, error] = await fetchData("/testimonials");
    if (error) console.log(error);
    let count = 0;
    while (count < 20) {
      await sleep(50);
      setProgress((prev) => prev + 1);
      count++;
    }
    setTestimonials(data);
  };

  const fetchBlogs = async () => {
    const [data, error] = await fetchData("/blogs");
    if (error) console.log(error);
    let count = 0;
    while (count < 20) {
      await sleep(50);
      setProgress((prev) => prev + 1);
      count++;
    }
    setBlogs(data);
  };

  const fetchCategories = async () => {
    const [data, error] = await fetchData("/blog-categories");
    if (error) console.log(error);
    let count = 0;
    while (count < 20) {
      await sleep(50);
      setProgress((prev) => prev + 1);
      count++;
    }
    setCategories(data);
  };

  return (
    <DataContext.Provider
      value={{
        ...landingPage,
        projects,
        testimonials,
        blogs,
        setBlogs,
        categories,
      }}
    >
      <AnimatePresence>
        {loading ||
        !landingPage ||
        !projects ||
        !testimonials ||
        !blogs ||
        !categories ? (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: "100%" }}
            transition={{ type: "tween" }}
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              backgroundColor: "black",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              zIndex: "999999",
            }}
          >
            <Heading>{progress}%</Heading>
            <Heading>{progress === 100 ? "Finishing" : "Loading"}</Heading>
          </motion.div>
        ) : (
          children
        )}
      </AnimatePresence>
    </DataContext.Provider>
  );
};

export const useDataBackend = () => useContext(DataContext);
