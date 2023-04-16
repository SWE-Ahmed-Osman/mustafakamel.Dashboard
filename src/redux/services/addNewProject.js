import axios from "axios";
import api from "../../api";

export const addNewProject = (data) => {
  var formdata = new FormData();
  const date = new Date();
  formdata.append("ResumeModelId", "1");
  formdata.append("Type", "2");
  formdata.append("Category", "1");
  formdata.append("ForSale", "false");
  formdata.append("Price", "12");
  formdata.append("LastProject", "false");
  formdata.append("Description", "sadsadsaddsadsadsa");
  formdata.append("Name", "asdsadsa");
  formdata.append(
    "BehanceUrl",
    "https://www.google.com/search?q=post+form+data+javascript+with+axios&sxsrf=AJOqlzVJj91G4utM-RN7M0MOTHvsL7cC5g%3A1679128047359&ei=73UVZITMFYSgkdUPs7mH-A0&oq=post+form+data+javascript+with+axiox&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgcIIRCgARAKMgcIIRCgARAKOgoIABBHENYEELADOgUIABCABDoGCAAQFhAeOgUIABCGAzoFCCEQoAE6CAghEBYQHhAdSgQIQRgAUOwGWMVoYJVxaAVwAXgAgAHBAYgBwBKSAQQwLjE1mAEAoAEByAEIwAEB&sclient=gws-wiz-s"
  );
  formdata.append(
    "DribbbleUrl",
    "https://www.google.com/search?q=post+form+data+javascript+with+axios&sxsrf=AJOqlzVJj91G4utM-RN7M0MOTHvsL7cC5g%3A1679128047359&ei=73UVZITMFYSgkdUPs7mH-A0&oq=post+form+data+javascript+with+axiox&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgcIIRCgARAKMgcIIRCgARAKOgoIABBHENYEELADOgUIABCABDoGCAAQFhAeOgUIABCGAzoFCCEQoAE6CAghEBYQHhAdSgQIQRgAUOwGWMVoYJVxaAVwAXgAgAHBAYgBwBKSAQQwLjE1mAEAoAEByAEIwAEB&sclient=gws-wiz-s"
  );
  formdata.append("DarkImageFile", data.enLightimg, "[PROXY]");
  formdata.append("LightImageFile", data.enLightimg, "[PROXY]");
  formdata.append("DarkPdfFile", data.enLightimg, "[PROXY]");
  formdata.append("LightPdfFile", data.enLightimg, "[PROXY]");
  formdata.append("StartDate", "3/3/2023");
  formdata.append("EndDate", "3/3/2023");

  var requestOptions = {
    method: "POST",
    body: formdata,
  };

  fetch("https://localhost:5001/api/PostDashboard/Project", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
