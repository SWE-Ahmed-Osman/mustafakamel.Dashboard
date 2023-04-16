import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AboutPageData,
  AddNewProjectUI,
  AllFeedbacks,
  CasesProjects,
  Home,
  HomeData,
  Requests,
  ResumeData,
  SingleCaseStudyPage,
  SingleRequestPage,
  SingleReviewPage,
  SingleUIProject,
  UIPage,
} from "./pages";
import Layout from "./layout";
import { useDispatch } from "react-redux";
import { getGlobalData } from "./redux/services";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGlobalData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" index element={<Home />} />
        <Route path="requests/*" element={<Requests />} />
        <Route path="requests/:ID" element={<SingleRequestPage />} />
        <Route path="allfeedbacks/*" element={<AllFeedbacks />} />
        <Route path="allfeedbacks/:ID" element={<SingleReviewPage />} />
        <Route path="uiprojects/*" element={<UIPage />} />
        <Route
          path="uiprojects/add"
          element={<AddNewProjectUI type="ui" state="new" />}
        />
        <Route path="uiprojects/:ID" element={<SingleUIProject type="ui" />} />
        <Route path="casesproejects/*" element={<CasesProjects />} />
        <Route
          path="casesproejects/add"
          element={<AddNewProjectUI type="case-study" state="new" />}
        />
        <Route
          path="casesproejects/:ID"
          element={<SingleCaseStudyPage type="case-study" />}
        />
        <Route path="homedata" element={<HomeData />} />
        <Route path="aboutdata" element={<AboutPageData />} />
        <Route path="resumedata" element={<ResumeData />} />
      </Route>
    </Routes>
  );
};

export default App;
