// import React from "react";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import { Box, Button, TextField, Typography, Paper } from "@mui/material";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// const styles = {
//   container: {
//     height: "100vh",
//     width: "100vw",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f3f3f3",
//   },
//   paper: {
//     padding: "30px",
//     width: "350px",
//     borderRadius: "8px",
//     backgroundColor: "#fff",
//     boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontWeight: 600,
//   },
//   button: {
//     marginTop: "16px",
//     padding: "10px",
//     fontSize: "16px",
//     backgroundColor: "#1976d2",
//     color: "white",
//   },
// };

// export default function Login() {
//   const { login } = useAuth();
//   const validationSchema = Yup.object({
//     emailAddress: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//   });

//   const handleLogin = async (values) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8085/ems/v1/login",
//         values
//       );

//       console.log("resp", response);

//       alert("Login success:");
//       if (response.status === 200) {
//         const { jwt } = response.data;
//         // localStorage.setItem("jwt", jwt)
//         login(jwt);
//         navigate("/dashboard");
//       } else {
//         alert("unable to login");
//       }

//       //localStorage.setItem('token', response.data.token);
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message);

//       alert("Invalid credentials");
//       //setFieldError('email', 'Invalid credentials');
//     } finally {
//       // setSubmitting(false);
//     }
//   };

//   const navigate = useNavigate();

//   return (
//     <Formik
//       initialValues={{ emailAddress: "", password: "" }}
//       validationSchema={validationSchema}
//       onSubmit={handleLogin}
//     >
//       {({ handleChange, handleBlur, values, errors, touched }) => (
//         <Box style={styles.container}>
//           <Paper elevation={3} style={styles.paper}>
//             <Typography variant="h5" style={styles.title}>
//               Login
//             </Typography>

//             <Form className="Extra">
//               <TextField
//                 fullWidth
//                 label="Email"
//                 name="emailAddress"
//                 type="email"
//                 value={values.emailAddress}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 error={touched.emailAddress && Boolean(errors.emailAddress)}
//                 helperText={touched.emailAddress && errors.emailAddress}
//                 style={{ marginBottom: "16px" }}
//               />

//               <TextField
//                 fullWidth
//                 label="Password"
//                 name="password"
//                 type="password"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 error={touched.password && Boolean(errors.password)}
//                 helperText={touched.password && errors.password}
//                 style={{ marginBottom: "8px" }}
//               />

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 style={styles.button}
//               >
//                 Login
//               </Button>
//             </Form>
//           </Paper>
//         </Box>
//       )}
//     </Formik>
//   );
// }

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Style configuration
const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url('/images/img2.jpg')", // Image from public folder
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    padding: "30px",
    width: "350px",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    color: "#fff",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontWeight: 600,
  },
  button: {
    marginTop: "16px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#4877a6ff",
    color: "white",
  },
};

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    emailAddress: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8085/ems/v1/login",
        values
      );

      if (response.status === 200) {
        const { jwt } = response.data;
        login(jwt);
        navigate("/dashboard");
      } else {
        alert("Unable to login");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert("Invalid credentials");
    }
  };

  return (
    <Formik
      initialValues={{ emailAddress: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ handleChange, handleBlur, values, errors, touched }) => (
        <Box style={styles.container}>
          <Paper elevation={3} style={styles.paper}>
            <Typography variant="h5" style={styles.title}>
              Login
            </Typography>

            <Form>
              <TextField
                fullWidth
                label="Email"
                name="emailAddress"
                type="email"
                value={values.emailAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.emailAddress && Boolean(errors.emailAddress)}
                helperText={touched.emailAddress && errors.emailAddress}
                style={{ marginBottom: "16px" }}
              />

              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                style={{ marginBottom: "8px" }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={styles.button}
              >
                Login
              </Button>
            </Form>
          </Paper>
        </Box>
      )}
    </Formik>
  );
}
