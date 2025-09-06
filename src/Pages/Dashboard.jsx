// // export default function Dashboard() {
// //   return (
// //     <div>
// //       <h1>Welcome home</h1>
// //       <header style ={{
// //                     width: "100%",
// //           height: "5%",
// //           padding: 10,
// //           top: "0",
// //           left: "0",
// //           position: "fixed",
// //           backgroundColor: '#dda0dd',
// //           alignItems: "center",
// //           zIndex: 1000,
// //           display: "flex",
// //           alignContent: "left",
// //           flexDirection: "inherit",
// //           justifyContent: "space-around"
// //       }}>
// //       <nav
// //         style={{
// //           backgroundColor: "#d6c8cbff",
// //             padding: 10,
// //             justifyContent: "space-around",
// //             display: "flex",
// //             alignItems: "left",
// //             flex: 1,
// //             color: "ActiveCaption"
// //         }}
// //       >
// //         <Link to="/event" style={{ color: "white", textDecoration: "none" }}>Events</Link>
// //         <br />

// //       </nav>
// //       </header>
// //     </div>
// //   );
// // }

// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Menu,
//   MenuItem,
//   Box,
//   Container,
// } from '@mui/material';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { useNavigate } from 'react-router-dom';
// import { EventForm } from './EventForm';

// export default function Dashboard() {
//   const [menuData, setMenuData] = useState(null);
//   const isMenuOpen = Boolean(menuData);
// const navigate = useNavigate();

//   const openMenu = (event) => setMenuData(event.currentTarget);
//   const closeMenu = () => setMenuData(null);

//   // const handleLogout = () => {
//   //    closeMenu();
//   //    window.location.href = '/login';
//   // };
// const handleLogout = () => {
//   closeMenu();
//   navigate('/login');
// };
//  const handleOnEvent = () => {
//   {<EventForm />}
//  }

//   return (
//     <Box sx={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>

//       <AppBar position="static">
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Typography variant="h6">Event Management System</Typography>

//           <IconButton color="inherit" onClick={openMenu}>
//             <AccountCircleIcon />
//           </IconButton>

//           <Menu
//             anchorEl={menuData}
//             open={isMenuOpen}
//             onClose={closeMenu}
//           >
//             <MenuItem onClick={closeMenu}>Profile</MenuItem>
//             <MenuItem onClick={handleOnEvent}>Event</MenuItem>
//             <MenuItem onClick={handleLogout}>Logout</MenuItem>
//           </Menu>
//         </Toolbar>
//       </AppBar>

//       <Box
//         sx={{
//           flexGrow: 1,
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: '#f0f4f8',
//         }}
//       >
//         <Container sx={{ textAlign: 'center' }}>
//           <Typography variant="h4" fontWeight="bold">
//             Welcome to the EMS Dashboard
//           </Typography>
//         </Container>
//       </Box>
//     </Box>
//   );
// }

// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Menu,
//   MenuItem,
//   Box,
//   Container,
//   Button,
// } from "@mui/material";
// // import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Eventlistcard from "../component/Eventlistcard";

// export default function Dashboard() {
//   const [menuData, setMenuData] = useState(null);
//   const isMenuOpen = Boolean(menuData);
//   const navigate = useNavigate();

//   const openMenu = (event) => setMenuData(event.currentTarget);
//   const closeMenu = () => setMenuData(null);

//   const handleLogout = () => {
//     closeMenu();
//     navigate("/login");
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//       }}
//     >
//       {/* Header */}
//       <AppBar position="static">
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography variant="h6">Event Management System</Typography>

//           <Button color="inherit" onClick={openMenu}>
//             {/* // </Button><AccountCircleIcon /> */}

//             {"👤"}
//           </Button>

//           <Menu anchorEl={menuData} open={isMenuOpen} onClose={closeMenu}>
//             <MenuItem onClick={closeMenu}>Profile</MenuItem>
//             <MenuItem
//               component={Link}
//               to="/event"
//               color="inherit"
//               sx={{ mr: 1 }}
//             >
//               Add Event
//             </MenuItem>
//             <MenuItem
//               component={Link}
//               to="/dynamicTable"
//               color="inherit"
//               sx={{ mr: 1 }}
//             >
//               View Events
//             </MenuItem>

//             <MenuItem onClick={handleLogout}>Logout</MenuItem>
//           </Menu>
//         </Toolbar>
//       </AppBar>

//       {/* Main Content */}
//       <Box
//         sx={{
//           flexGrow: 1,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "#f0f4f8",
//         }}
//       >
//         <Container sx={{ textAlign: "center" }}>
//           <Typography variant="h4" fontWeight="bold">
//             Welcome to the EMS Dashboard
//           </Typography>

//           <Typography
//             variant="h4"
//             fontWeight="bold"
//             component={Link}
//             to="/eventscard"
//             color="inherit"
//             sx={{ mr: 1 }}
//           >
//             Events
//           </Typography>
//         </Container>
//       </Box>
//     </Box>
//   );
// }

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [menuData, setMenuData] = useState(null);
  const isMenuOpen = Boolean(menuData);
  const navigate = useNavigate();

  const openMenu = (event) => setMenuData(event.currentTarget);
  const closeMenu = () => setMenuData(null);

  const handleLogout = () => {
    closeMenu();
    navigate("/login");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: "url('/images/img3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Event Management System
          </Typography>

          <Button color="#ffffffff" onClick={openMenu}>
            👤
          </Button>

          <Menu anchorEl={menuData} open={isMenuOpen} onClose={closeMenu}>
            <MenuItem onClick={closeMenu}>Profile</MenuItem>
            <MenuItem
              component={Link}
              to="/event"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              Add Event
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dynamicTable"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              View Events
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(4px)", // Optional: blur effect over content
        }}
      >
        <Container
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Slight transparency
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome to the EMS Dashboard
          </Typography>

          <Typography
            variant="h5"
            component={Link}
            to="/eventscard"
            sx={{
              color: "#467557ff",
              textDecoration: "none",
              fontWeight: "bold",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            View Events
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
