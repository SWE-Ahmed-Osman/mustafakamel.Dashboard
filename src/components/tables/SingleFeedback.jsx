import React, { useEffect, useState } from "react";
import { AcceptIcon, RefuseIcon } from "../../UI/Icons";
import { useNavigate } from "react-router-dom";

const SingleFeedback = ({ feedback }) => {
  const [state, setState] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setState(feedback?.Reviewed);
  }, [feedback?.Reviewed]);

  return (
    <tr>
      <td>
        <div
          className="flex"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/allfeedbacks/${feedback?.Id}`)}
        >
          <span className="row_num">
            <img
              src={
                feedback?.ImageUrl
                  ? feedback?.ImageUrl
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuigXD45DkkFU3159RAK53IMriiLLGUjNeFbqzPY&s"
              }
              alt="user_image"
            />
          </span>
          {feedback?.Name}
        </div>
      </td>
      <td
        style={{
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          display: "block",
          overflow: "hidden",
          width: "300px",
          lineHeight: "51px",
          textAlign: "center",
        }}
      >
        {feedback?.Description}
      </td>
      <td>{feedback?.date}</td>
      <td>
        {!state ? (
          <div className="btns flex">
            <button onClick={() => setState(true)}>
              <AcceptIcon />
              قبول
            </button>
            <button onClick={() => setState(null)}>
              <RefuseIcon />
              رفض
            </button>
          </div>
        ) : state ? (
          <span className="approved">تم قبولة</span>
        ) : state === null ? (
          <span className="canceled">تم رفضة</span>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
};

export default SingleFeedback;
