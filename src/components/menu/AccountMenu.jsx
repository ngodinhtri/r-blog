import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { useNavigate } from "react-router-dom";
import { signOut } from "@/firebase/firebase-config.js";
import { useEffect, useRef, useState } from "react";

const AccountMenu = function AccountMenu({ anchorId }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const anchorRef = useRef(null);

  useEffect(() => {
    const handleShow = (e) => setAnchorEl(e.currentTarget);

    anchorRef.current = document.getElementById(anchorId);
    anchorRef.current.addEventListener("click", handleShow);

    return () => {
      anchorRef.current.removeEventListener("click", handleShow);
    };
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      autoFocus={false}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem>
        <Avatar /> My account
      </MenuItem>
      <Divider />
      <MenuItem onClick={() => navigate("/manage/dashboard")}>
        <ListItemIcon>
          <DashboardOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Dashboard
      </MenuItem>
      <MenuItem onClick={signOut}>
        <ListItemIcon>
          <LogoutOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default AccountMenu;
