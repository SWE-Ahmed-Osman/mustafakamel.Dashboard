import React from "react";
import AdminCards from "../UI/Cards/AdminCards";
import OrederTable from "../components/tables/OrederTable";
import { useSelector } from "react-redux";
import { Error, Loading } from "../components";

const Requests = () => {
  // const currentOrders = [
  //   {
  //     id: 1,
  //     name: "مصطفي كامل أحمد",
  //     email: "mostafa.kamel95@example.com",
  //     budget: "1 - 2 ألف",
  //     time: "5 - 4 أشهر",
  //     date: "22 ديسمبر",
  //     status: "pennding",
  //   },
  //   {
  //     id: 2,
  //     name: "مصطفي كامل أحمد",
  //     email: "mostafa.kamel95@example.com",
  //     budget: "1 - 2 ألف",
  //     time: "5 - 4 أشهر",
  //     date: "22 ديسمبر",
  //     status: "approved",
  //   },
  //   {
  //     id: 3,
  //     name: "مصطفي كامل أحمد",
  //     email: "mostafa.kamel95@example.com",
  //     budget: "1 - 2 ألف",
  //     time: "5 - 4 أشهر",
  //     date: "22 ديسمبر",
  //     status: "canceled",
  //   },
  //   {
  //     id: 4,
  //     name: "مصطفي كامل أحمد",
  //     email: "mostafa.kamel95@example.com",
  //     budget: "1 - 2 ألف",
  //     time: "5 - 4 أشهر",
  //     date: "22 ديسمبر",
  //     status: "canceled",
  //   },
  //   {
  //     id: 5,
  //     name: "مصطفي كامل أحمد",
  //     email: "mostafa.kamel95@example.com",
  //     budget: "1 - 2 ألف",
  //     time: "5 - 4 أشهر",
  //     date: "22 ديسمبر",
  //     status: "canceled",
  //   },
  //   {
  //     id: 6,
  //     name: "مصطفي كامل أحمد",
  //     email: "mostafa.kamel95@example.com",
  //     budget: "1 - 2 ألف",
  //     time: "5 - 4 أشهر",
  //     date: "22 ديسمبر",
  //     status: "canceled",
  //   },
  //   {
  //     id: 7,
  //     name: "مصطفي كامل أحمد",
  //     email: "mostafa.kamel95@example.com",
  //     budget: "1 - 2 ألف",
  //     time: "5 - 4 أشهر",
  //     date: "22 ديسمبر",
  //     status: "canceled",
  //   },
  // ];

  const { data, error, loading } = useSelector((state) => state.global);

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <AdminCards>
      <OrederTable currentData={data?.ProjectRequests || []} />
    </AdminCards>
  );
};

export default Requests;
