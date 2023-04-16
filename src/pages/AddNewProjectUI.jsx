import React, { useState } from "react";
import { NewUiProjects } from "../components";

const AddNewProjectUI = () => {
  const [data, setData] = useState({});

  return <NewUiProjects type="uiProjects" data={data} setData={setData} />;
};

export default AddNewProjectUI;
