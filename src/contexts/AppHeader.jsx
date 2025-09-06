import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { Menu, MenuItem } from "@mui/material";

function AppHeader() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState(null);
  const isMenuOpen = Boolean(menuData);

  const openMenu = (event) => setMenuData(event.currentTarget);
  const closeMenu = () => setMenuData(null);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar color="#1e0e14ff">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>

        {!isAuthenticated && (
          <>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </>
        )}

        {isAuthenticated && (
          <>
            <div color="inherit" component={Link} to="/dashboard">
              <AppBar position="static">
                <Toolbar
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button color="primary" onClick={openMenu}>
                    {/* // </Button><AccountCircleIcon /> */}

                    {"👤"}
                  </Button>

                  <Menu
                    anchorEl={menuData}
                    open={isMenuOpen}
                    onClose={closeMenu}
                  >
                    <MenuItem onClick={closeMenu}>Profile</MenuItem>
                    <MenuItem
                      component={Link}
                      to="/event"
                      color="inherit"
                      sx={{ mr: 1 }}
                    >
                      Add Event
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/dynamicTable"
                      color="inherit"
                      sx={{ mr: 1 }}
                    >
                      View Events
                    </MenuItem>

                    {/* <MenuItem onClick={handleLogout}>Logout</MenuItem> */}
                  </Menu>
                </Toolbar>
              </AppBar>
              {/* <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button> */}
              <Typography sx={{ ml: 2 }}>{user?.data.emailAddress}</Typography>
              <Menu anchorEl={menuData} open={isMenuOpen} onClose={closeMenu}>
                <MenuItem onClick={closeMenu}>Profile</MenuItem>
                <MenuItem
                  component={Link}
                  to="/event"
                  color="inherit"
                  sx={{ mr: 1 }}
                >
                  Add Event
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/dynamicTable"
                  color="inherit"
                  sx={{ mr: 1 }}
                >
                  View Events
                </MenuItem>

                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
