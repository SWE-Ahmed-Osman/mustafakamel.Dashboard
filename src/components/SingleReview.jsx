import React from "react";
import AdminCards from "../UI/Cards/AdminCards";
import { MessageIcon, PaperIcon, UserNameIcon } from "../UI/Icons";
import { ReviewFooter } from "./";

const SingleReview = ({ Review }) => {
  console.log(Review);

  return (
    <>
      <AdminCards>
        <div className="data">
          <img
            src={
              Review?.ImageUrl ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuigXD45DkkFU3159RAK53IMriiLLGUjNeFbqzPY&s"
            }
            alt="profileImage"
          />
          <div className="flex">
            <span className="row_num">1</span>
            <p className="question">رأيك عني بكل صراحة ؟</p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {Review?.Feeling?.length &&
              Review?.Feeling.map((react) => (
                <p key={react} className="answer border_card">
                  {react}
                </p>
              ))}
          </div>
        </div>
      </AdminCards>
      <AdminCards>
        <div className="data">
          <div className="flex">
            <span className="row_num">2</span>
            <p className="question">ما هو أسمك ؟</p>
          </div>
          <p className="answer">
            <UserNameIcon />
            {Review?.Name}
          </p>
        </div>
        <div className="data">
          <div className="flex">
            <span className="row_num">3</span>
            <p className="question">ما هو المسمي الوظيفي؟</p>
          </div>
          <p className="answer">
            <MessageIcon />
            {Review?.Job || 'مصمم تجربة المستخدم"'}
          </p>
        </div>
        <div className="data">
          <div className="flex">
            <span className="row_num">4</span>
            <p className="question">تعليقك عني</p>
          </div>
          <p className="answer about_p">
            <PaperIcon />
            {Review?.Description}
          </p>
        </div>
      </AdminCards>
      <ReviewFooter
        onRefuseReview={() => {}}
        onApproveReview={() => {}}
        status={false}
      />
    </>
  );
};

export default SingleReview;
