import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { useState } from "react";
import { createContext } from "react";
import { useToast } from "../hooks";

export const AlertDialogContext = createContext({});

export const AlertDialogProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [title, setTitle] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const showToast = useToast();

  return (
    <AlertDialogContext.Provider value={{ setHeading, setTitle, setOpen }}>
      {children}
      <Box sx={{ pt: 4 }}>
        <Button variant="outlined" onClick={handleOpen}>
          {heading}
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button
              onClick={() => {
                showToast();
              }}
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        <p>adsd</p>
      </Box>
    </AlertDialogContext.Provider>
  );
};
