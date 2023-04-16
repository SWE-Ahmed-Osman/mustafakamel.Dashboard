import React, { useEffect, useState } from "react";
import AdminCards from "../UI/Cards/AdminCards";
import { UiProjectsList } from "../components";

const CasesProjects = () => {
  const [projects, setProjects] = useState([]);

  const uiProjects = [
    {
      id: 1,
      img: "",
      name: "تطبيق كار رينت",
      desc: "هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات ",
      liks: 245,
      date: "22 ديسمبر",
      show: false,
    },
    {
      id: 2,
      img: "",
      name: "تطبيق كار رينت",
      desc: "هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات ",
      liks: 245,
      date: "22 ديسمبر",
      show: true,
    },
    {
      id: 3,
      img: "",
      name: "تطبيق كار رينت",
      desc: "هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات ",
      liks: 245,
      date: "22 ديسمبر",
      show: false,
    },
    {
      id: 4,
      img: "",
      name: "تطبيق كار رينت",
      desc: "هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات ",
      liks: 245,
      date: "22 ديسمبر",
      show: true,
    },
    {
      id: 5,
      img: "",
      name: "تطبيق كار رينت",
      desc: "هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات ",
      liks: 245,
      date: "22 ديسمبر",
      show: false,
    },
    {
      id: 6,
      img: "",
      name: "تطبيق كار رينت",
      desc: "هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات ",
      liks: 245,
      date: "22 ديسمبر",
      show: false,
    },
  ];

  useEffect(() => {
    setProjects(uiProjects);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminCards>
      <UiProjectsList setProjects={setProjects} projects={projects} />
    </AdminCards>
  );
};

export default CasesProjects;
