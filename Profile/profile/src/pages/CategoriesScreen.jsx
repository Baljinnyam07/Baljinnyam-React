import { Delete, Edit, Home } from "@mui/icons-material";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { BreadCrumbs } from "../components";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "Name", headerName: "Name", flex: 1 },
  {
    field: "",
    headerName: "Actions",
    width: 120,
    sortable: false,
    filterable: false,
    headerAlign: "center",
    renderCell: (params) => (
      <Stack sx={{ flexDirection: "row", gap: 3 }}>
        <Tooltip title="Edit">
          <IconButton aria-label="edit" color="primary">
            <Edit fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton aria-label="delete" color="secondary">
            <Delete fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </Stack>
    ),
  },
];

export const CategoriesScreen = () => {
  const [categories, setCategories] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    axios.get("http://localhost:8000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);
  const breadCrumbs = [
    {
      label: "",
      to: "/",
      icon: <Home />,
    },
    {
      label: "Categories",
    },
  ];

  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <Stack
        sx={{
          mt: 3,
          backgroundColor: "white",
          p: 3,
          borderRadius: 2,
          boxShadow: "0 0 5px rgba(0,0,0,.1)",
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Categories
        </Typography>
        <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button variant="contained">New</Button>
          <Button variant="contained">Filter</Button>
        </Stack>
        <Box sx={{ height: 400, width: "100%", mt: 3 }}>
          <DataGrid
            key={(index) => index}
            rows={categories}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(size) => setPageSize(size)}
            rowsPerPageOptions={[5, 15, 20]}
          />
        </Box>
      </Stack>
    </>
  );
};
