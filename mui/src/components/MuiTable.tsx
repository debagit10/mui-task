import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  TableCell,
} from "@mui/material";

const tableData = [
  {
    id: 1,
    first_name: "Fritz",
    last_name: "Flack",
    email: "fflack0@paginegialle.it",
    gender: "Male",
    ip_address: "211.2.18.195",
  },
  {
    id: 2,
    first_name: "Emelda",
    last_name: "Taplow",
    email: "etaplow1@fotki.com",
    gender: "Female",
    ip_address: "181.22.242.113",
  },
  {
    id: 3,
    first_name: "Liana",
    last_name: "Escalero",
    email: "lescalero2@dion.ne.jp",
    gender: "Female",
    ip_address: "132.247.17.158",
  },
  {
    id: 4,
    first_name: "Dunn",
    last_name: "Kunc",
    email: "dkunc3@nbcnews.com",
    gender: "Male",
    ip_address: "151.96.117.136",
  },
  {
    id: 5,
    first_name: "Bobbe",
    last_name: "Hindes",
    email: "bhindes4@odnoklassniki.ru",
    gender: "Female",
    ip_address: "230.100.26.78",
  },
  {
    id: 6,
    first_name: "Hale",
    last_name: "Markos",
    email: "hmarkos5@yandex.ru",
    gender: "Male",
    ip_address: "170.43.164.216",
  },
  {
    id: 7,
    first_name: "Demott",
    last_name: "Baines",
    email: "dbaines6@noaa.gov",
    gender: "Agender",
    ip_address: "121.84.191.223",
  },
  {
    id: 8,
    first_name: "Philly",
    last_name: "Waters",
    email: "pwaters7@webnode.com",
    gender: "Female",
    ip_address: "83.164.224.243",
  },
  {
    id: 9,
    first_name: "Jodee",
    last_name: "Haycroft",
    email: "jhaycroft8@umich.edu",
    gender: "Female",
    ip_address: "117.190.26.76",
  },
  {
    id: 10,
    first_name: "Kathlin",
    last_name: "Denmead",
    email: "kdenmead9@va.gov",
    gender: "Female",
    ip_address: "146.124.143.228",
  },
];

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.first_name}</TableCell>
              <TableCell>{item.last_name}</TableCell>
              <TableCell>{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
