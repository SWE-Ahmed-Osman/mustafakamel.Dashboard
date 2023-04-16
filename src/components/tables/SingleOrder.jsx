import React from "react";
import { useNavigate } from "react-router-dom";

const SingleOrder = ({ index, order }) => {
  const navigate = useNavigate();

  return (
    <tr>
      <td
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/requests/${order?.id}`)}
      >
        <span className="row_num">{index + 1}</span>
        {order?.Name}
      </td>
      <td>{order?.Email}</td>
      <td>{order?.Budget}</td>
      <td>{order?.Timeline}</td>
      <td>{order?.date || "22 ديسمبر"}</td>
      <td>
        {order?.status === "pennding" ? (
          <span className="pennding">في الأنتظار</span>
        ) : order?.status === "approved" ? (
          <span className="approved">تم الرد</span>
        ) : (
          <span className="canceled">تجاهلتة</span>
        )}
      </td>
    </tr>
  );
};

export default SingleOrder;
