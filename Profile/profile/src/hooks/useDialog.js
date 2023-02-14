import { useContext } from "react"
import { AlertDialogContext } from "../contexts/AlertDialogContext";

export const useDialog = () =>{
    const { setHeading, setTitle, setOpen} = useContext(AlertDialogContext);
    const showDialog = (msg = '', type = "") => {
        setHeading(msg);
        setTitle(type);
        setOpen(true);
  };
  return showDialog;
}