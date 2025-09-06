// import { Link } from "react-router-dom";
// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome home</h1>
//       <header style ={{
//                     width: "100%",
//           height: "5%",
//           padding: 10,
//           top: "0",
//           left: "0",
//           position: "fixed",
//           backgroundColor: '#e1d7d7ff',
//           alignItems: "center",
//           zIndex: 1000,
//           display: "flex",
//           alignContent: "left",
//           flexDirection: "inherit",
//           justifyContent: "space-around"
//       }}>
//       <nav
//         style={{
//           backgroundColor: "#d6c8cbff",
//             padding: 10,
//             justifyContent: "right",
//             display: "flex",
//             alignItems: "right",
//             flex: 1,
//             color: "ActiveCaption"
//         }}
//       >
//         <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
//         <br />
//         <Link to="/register" style={{ color: "white", textDecoration: "none" }}>Register</Link>
//         <br />
//         <Link to="/signin" style={{ color: "white", textDecoration: "none" }}>Sign in</Link>
//       </nav>
//       </header>
//     </div>
//   );
// }

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header / Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            Event Management System
          </Typography>

          <Box>
            {/* <Button component={Link} to="/login" color="inherit" sx={{ mr: 1 }}>
              Login
            </Button> */}
            {/* <Button
              component={Link}
              to="/register"
              color="inherit"
              sx={{ border: "1px solid #fff" }}
            >
              Register
            </Button> */}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Centered Section */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f4f8",
          padding: 4,
          backgroundImage: "url('/images/img4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            color="#a5dda8ff"
          >
            Welcome to the Event Management System
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
