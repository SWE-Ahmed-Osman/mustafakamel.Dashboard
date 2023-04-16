import React, { useEffect, useState } from "react";
import { Error, Loading, SingleReview } from "../components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleReviewPage = () => {
  const { ID } = useParams();
  const { data, error, loading } = useSelector((state) => state.global);

  // const Review = {
  //   id: 2312,
  //   name: "مصطفي كامل",
  //   reactions: ["مساعد", "جاد", "مجتهد", "ودود", "ذكي"],
  //   job: "مصمم تجربة المستخدم",
  //   review:
  //     "هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده هذا تصميم لتطبيق جوال لبيع النباتات ، يمكنك أن تجد كل ما تريده من أنواع مختلفة من النباتات والاختيار من بينها ، ثم يمكنك شحنها إلى أي مكان تريده..",
  //   status: "pennding",
  // };

  const currentReview = data?.Feedbacks.find(
    (feedback) => +feedback.Id === +ID
  );

  if (error) return <Error />;
  if (loading && !currentReview) return <Loading />;

  return <SingleReview Review={currentReview} />;
};

export default SingleReviewPage;
