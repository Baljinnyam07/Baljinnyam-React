import { Delete, Edit } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { Stack } from "@mui/system";

import axios from "axios";
import { useState } from "react";
import { useToast } from "../hooks";

export const ActionsRender = ({ item }) => {
  const [deleted, setDeleted] = useState(false);
  const showToast = useToast();
  const deleteItem = () => {
    axios
      .delete("http://localhost:8000/categories/" + item)
      .then(() => {
        showToast();
        setDeleted(true);
      })
      .catch((err) => {
        console.log(err);
        showToast();
      });
  };
  return (
    <>
      <Stack sx={{ flexDirection: "row", gap: 3 }}>
        <Tooltip title="Edit">
          <IconButton aria-label="edit" color="primary">
            <Edit fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            onClick={deleteItem}
            aria-label="delete"
            color="secondary"
          >
            <Delete fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </Stack>
    </>
  );
};
