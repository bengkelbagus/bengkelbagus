import { createContext, useContext, useEffect, useState } from "react";
import { BACKEND_URL } from "@/Utils/Constants";
import axios from "axios";
import { Heading } from "@chakra-ui/layout";
import { AnimatePresence, motion } from "framer-motion";

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
    if (progress >= 100) setLoading(false);
  }, [progress]);

  const fetchData = async (url) => {
    try {
      const promise = await axios.get(BACKEND_URL + url, {
        onDownloadProgress: (p) => {
          const progressPercent = Math.round((p.loaded * 100) / p.total);
          setProgress((prev) => prev + progressPercent / 2);
        },
      });
      const data = await promise.data;
      return [data, null];
    } catch {
      return [null, "Error"];
    }
  };
  const fetchLandingPage = async () => {
    const [data, error] = await fetchData("/landing-page");
    if (error) alert(error);
    setLandingPage(data);
  };

  const fetchProjects = async () => {
    const [data, error] = await fetchData("/projects");
    if (error) alert(error);
    setProjects(data);
  };

  const fetchTestimonials = async () => {
    const [data, error] = await fetchData("/testimonials");
    if (error) alert(error);
    setTestimonials(data);
  };

  const fetchBlogs = async () => {
    const [data, error] = await fetchData("/blogs");
    if (error) alert(error);
    setBlogs(data);
  };

  const fetchCategories = async () => {
    const [data, error] = await fetchData("/blog-categories");
    if (error) alert(error);
    setCategories(data);
  };

  return (
    <DataContext.Provider
      value={{ ...landingPage, projects, testimonials, blogs, categories }}
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
