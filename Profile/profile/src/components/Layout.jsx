import { Box } from "@mui/system";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { DrawerHeader, Sidebar } from "./SideBar";

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navbar {...{ open, handleDrawerClose, handleDrawerOpen }} />
        <Sidebar open={open} />
        <Box>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </>
  );
};
