import { Home } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { BreadCrumbs } from "../components";
import axios from "axios";
import { useToast } from "../hooks";
import { useNavigate } from "react-router";

export const NewUser = ({ afterSubmit }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const showToast = useToast();
  const submit = () => {
    axios
      .post("http://localhost:8000/categories", { name })
      .then((res) => {
        showToast();
      })
      .catch((err) => {
        console.log(err);
        showToast();
      });
  };
  const breadCrumbs = [
    {
      label: "",
      to: "/",
      icon: <Home />,
    },
    {
      label: "Categories",
    },
    {
      label: "New",
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
        <Typography variant="h4" sx={{ pb: 2, color: "rgb(110, 110, 110)" }}>
          Add users
        </Typography>
        <TextField
          value={name}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            submit();
            showToast();
            navigate("/categories");
          }}
          sx={{ mt: 3, width: "5vh" }}
          variant="contained"
        >
          Save
        </Button>
      </Stack>
    </>
  );
};
