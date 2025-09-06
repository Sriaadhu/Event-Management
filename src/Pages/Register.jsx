// // import { Box, Button, TextField, Typography, Paper, Grid } from "@mui/material";
// // import { useFormik } from "formik";
// // import * as Yup from "yup";
// // import { Link } from "react-router-dom";
// // import React from "react";

// // export default function Register() {

// //     const genderOption =  ['Male' ,'Female'];

// //   const formik = useFormik({
// //     initialValues: {
// //       email: "",
// //       password: "",
// //       dob: "",
// //       gender: "",
// //       mobile: "",
// //       occupation: "",
// //       addr1: "",
// //       addr2: "",
// //       country: "",
// //       state: "",
// //       district: "",
// //       confirmpassword: "",
// //     },
// //     validationSchema: Yup.object({
// //       email: Yup.string().email("Invalid email").required("*"),

// //       password: Yup.string()
// //         .required("No password provided.")
// //         .min(8, "Password is too short - should be 8 chars minimum.")
// //         .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),

// //       confirmpassword: Yup.string()
// //         .required("No password provided.")
// //         .min(8, "Password is too short - should be 8 chars minimum.")
// //         .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),

// //       mobile: Yup.string().email("Invalid mobile").required("*"),

// //       district: Yup.string().email("Invalid district").required("*"),

// //       country: Yup.string().email("Invalid country").required("*"),
// //     }),

// //     onSubmit: (values) => {
// //       console.log(values);
// //     },
// //   });

// //   return (
// //     <div style={{ alignContent: "center", margin: 0 }}>
// //       <Box style={{ width: 500, height: 1000 }}>
// //         <h1> Login Form</h1>
// //         <form
// //           onSubmit={formik.handleSubmit}
// //           style={{ alignContent: "center", border: 1, borderStyle: "solid" }}
// //         >
// //           <br />
// //           <h2>Enter your Email:</h2>
// //           <TextField
// //             label="Email"
// //             name="email"
// //             value={formik.values.email}
// //             onChange={formik.handleChange}
// //             error={formik.touched.email && Boolean(formik.errors.email)}
// //             helperText={formik.touched.email && formik.errors.email}
// //           />
// //           <br />
// //           <br />

// //           <Grid>
// //           <TextField>
// //             {genderOption.map((option) => (
// // 	            <MenuItem key = {option} value = {option} >
// // 			{option} ))
// // </MenuItem>
// // </TextField>

// //           </Grid>

// //           <h2>Enter your Password: </h2>
// //           <TextField
// //             label="Password"
// //             name="password"
// //             type="password"
// //             value={formik.values.password}
// //             onChange={formik.handleChange}
// //             error={formik.touched.password && Boolean(formik.errors.password)}
// //             helperText={formik.touched.password && formik.errors.password}
// //           />
// //           <br />
// //           <br />
// //           <h2>District: </h2>
// //           <TextField
// //             label="district"
// //             name="district"
// //             type="district"
// //             value={formik.values.district}
// //             onChange={formik.handleChange}
// //             error={formik.touched.district && Boolean(formik.errors.district)}
// //             helperText={formik.touched.district && formik.errors.district}
// //           />

// //           <h2>State: </h2>
// //           <TextField
// //             label="state"
// //             name="state"
// //             type="state"
// //             value={formik.values.state}
// //             onChange={formik.handleChange}
// //             error={formik.touched.state && Boolean(formik.errors.state)}
// //             helperText={formik.touched.state && formik.errors.state}
// //           />
// //           <br />
// //           <br />

// //           <h2>Country: </h2>
// //           <TextField
// //             label="country"
// //             name="country"
// //             type="stcountryate"
// //             value={formik.values.country}
// //             onChange={formik.handleChange}
// //             error={formik.touched.country && Boolean(formik.errors.country)}
// //             helperText={formik.touched.country && formik.errors.country}
// //           />
// //           <br />
// //           <br />

// //           <Button type="submit" variant="contained">
// //             Login
// //           </Button>
// //           <div>
// //             <h4>
// //               Forget your password?{" "}
// //               <Link
// //                 to="/signin"
// //                 style={{ color: "black", textDecoration: "none" }}
// //               >
// //                 Sign in
// //               </Link>
// //             </h4>
// //             <Link
// //               to="/register"
// //               style={{ color: "black", textDecoration: "none" }}
// //             >
// //               New User
// //             </Link>
// //           </div>
// //         </form>
// //       </Box>
// //     </div>
// //   );
// // }

// // import {
// //   Box,
// //   Button,
// //   TextField,
// //   Typography,
// //   Paper,
// //   Grid,
// //   MenuItem,
// // } from "@mui/material";
// // import { useFormik } from "formik";
// // import * as Yup from "yup";
// // import { Link } from "react-router-dom";
// // import React from "react";

// // export default function Register() {
// //   const genderOption = ["Male", "Female"];
// //   const districtOption = ["Ariyalur",
// // "Chengalpattu",
// // "Chennai",
// // "Coimbatore",
// // "Cuddalore",
// // "Dharmapuri",
// // "Dindigul",
// // "Erode",
// // "Kallakurichi",
// // "Kancheepuram",
// // "Kanniyakumari",
// // "Karur",
// // "Krishnagiri",
// // "Madurai",
// // "Mayiladuthurai",
// // "Nagapattinam",
// // "Namakkal",
// // "Nilgiris",
// // "Perambalur",
// // "Pudukkottai",
// // "Ramanathapuram",
// // "Ranipet",
// // "Salem",
// // "Sivaganga",
// // "Tenkasi",
// // "Thanjavur",
// // "Theni",
// // "Thoothukudi",
// // "Tiruchirappalli",
// // "Tirunelveli",
// // "Tirupathur",
// // "Tiruppur",
// // "Tiruvallur",
// // "Tiruvannamalai",
// // "Tiruvarur",
// // "Vellore",
// // "Viluppuram",
// // "Virudhunagar" ]

// //   const formik = useFormik({
// //     initialValues: {
// //       email: "",
// //       password: "",
// //       confirmpassword: "",
// //       dob: "",
// //       gender: "",
// //       mobile: "",
// //       occupation: "",
// //       addr1: "",
// //       addr2: "",
// //       country: "",
// //       state: "",
// //       district: "",
// //     },

// //     validationSchema: Yup.object({
// //       email: Yup.string().email("Invalid email").required("*"),

// //       password: Yup.string()
// //         .required("No password provided.")
// //         .min(8, "Password is too short - should be 8 chars minimum.")
// //         .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),

// //       confirmpassword: Yup.string()
// //         .oneOf([Yup.ref("password"), null], "Passwords must match")
// //         .required("*"),

// //       gender: Yup.string().required("Please select gender"),

// //       mobile: Yup.string()
// //         .matches(/^[0-9]{10}$/, "Invalid mobile number")
// //         .required("*"),

// //       district: Yup.string().required("*"),

// //       country: Yup.string().required("*"),
// //     }),

// //     onSubmit: (values) => {
// //       console.log(values);
// //     },
// //   });

// //   // if(password != confirmpassword)
// //     // alert("Password doesnt match")

// //   return (
// //     <div style={{ alignContent: "center", margin: 0 }}>
// //       <Box style={{ width: 500, padding: 20 }}>
// //         <h1>Register Form</h1>
// //         <form
// //           onSubmit={formik.handleSubmit}
// //           style={{ alignContent: "center", border: "1px solid #ccc", padding: 20 }}
// //         >
// //           {/* Email */}
// //           <h2>Enter your Email:</h2>
// //           <TextField
// //             fullWidth
// //             label="Email"
// //             name="email"
// //             value={formik.values.email}
// //             onChange={formik.handleChange}
// //             error={formik.touched.email && Boolean(formik.errors.email)}
// //             helperText={formik.touched.email && formik.errors.email}
// //           />
// //           <br />
// //           <br />

// //           {/* Gender Dropdown */}
// //           <h2>Select Gender:</h2>
// //           <TextField
// //             select
// //             fullWidth
// //             label="Gender"
// //             name="gender"
// //             value={formik.values.gender}
// //             onChange={formik.handleChange}
// //             error={formik.touched.gender && Boolean(formik.errors.gender)}
// //             helperText={formik.touched.gender && formik.errors.gender}
// //           >
// //             {genderOption.map((option) => (
// //               <MenuItem key={option} value={option}>
// //                 {option}
// //               </MenuItem>
// //             ))}
// //           </TextField>
// //           <br />
// //           <br />

// //           <h2>Select District:</h2>
// //           <TextField
// //             select
// //             fullWidth
// //             label="district"
// //             name="district"
// //             value={formik.values.gender}
// //             onChange={formik.handleChange}
// //             error={formik.touched.district && Boolean(formik.errors.district)}
// //             helperText={formik.touched.district && formik.errors.district}
// //           >
// //             {districtOption.map((option) => (
// //               <MenuItem key={option} value={option}>
// //                 {option}
// //               </MenuItem>
// //             ))}
// //           </TextField>
// //           <br />
// //           <br />

// //           {/* Password */}
// //           <h2>Enter your Password: </h2>
// //           <TextField
// //             fullWidth
// //             label="Password"
// //             name="password"
// //             type="password"
// //             value={formik.values.password}
// //             onChange={formik.handleChange}
// //             error={formik.touched.password && Boolean(formik.errors.password)}
// //             helperText={formik.touched.password && formik.errors.password}
// //           />
// //           <br />
// //           <br />

// //           {/* Confirm Password */}
// //           <h2>Confirm Password: </h2>
// //           <TextField
// //             fullWidth
// //             label="Confirm Password"
// //             name="confirmpassword"
// //             type="password"
// //             value={formik.values.confirmpassword}
// //             onChange={formik.handleChange}
// //             error={
// //               formik.touched.confirmpassword &&
// //               Boolean(formik.errors.confirmpassword)
// //             }
// //             helperText={
// //               formik.touched.confirmpassword && formik.errors.confirmpassword
// //             }
// //           />
// //           <br />
// //           <br />

// //           {/* Mobile */}
// //           <h2>Mobile Number: </h2>
// //           <TextField
// //             fullWidth
// //             label="Mobile"
// //             name="mobile"
// //             value={formik.values.mobile}
// //             onChange={formik.handleChange}
// //             error={formik.touched.mobile && Boolean(formik.errors.mobile)}
// //             helperText={formik.touched.mobile && formik.errors.mobile}
// //           />
// //           <br />
// //           <br />

// //           {/* District */}
// //           <h2>District: </h2>
// //           <TextField
// //             fullWidth
// //             label="District"
// //             name="district"
// //             type="text"
// //             value={formik.values.district}
// //             onChange={formik.handleChange}
// //             error={formik.touched.district && Boolean(formik.errors.district)}
// //             helperText={formik.touched.district && formik.errors.district}
// //           />
// //           <br />
// //           <br />

// //           {/* State */}
// //           <h2>State: </h2>
// //           <TextField
// //             fullWidth
// //             label="State"
// //             name="state"
// //             type="text"
// //             value={formik.values.state}
// //             onChange={formik.handleChange}
// //             error={formik.touched.state && Boolean(formik.errors.state)}
// //             helperText={formik.touched.state && formik.errors.state}
// //           />
// //           <br />
// //           <br />

// //           <h2>Country: </h2>
// //           <TextField
// //             fullWidth
// //             label="Country"
// //             name="country"
// //             type="text"
// //             value={formik.values.country}
// //             onChange={formik.handleChange}
// //             error={formik.touched.country && Boolean(formik.errors.country)}
// //             helperText={formik.touched.country && formik.errors.country}
// //           />
// //           <br />
// //           <br />

// //           <Button type="submit" variant="contained" fullWidth>
// //             Register
// //           </Button>

// //           {/* Links */}
// //           <div style={{ marginTop: 20 }}>
// //             <h4>
// //               Already have an account?{" "}
// //               <Link
// //                 to="/signin"
// //                 style={{ color: "black", textDecoration: "none" }}
// //               >
// //                 Sign in
// //               </Link>
// //             </h4>
// //           </div>
// //         </form>
// //       </Box>
// //     </div>
// //   );
// // }

// import React from "react";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";
// //import axios from "axios";

// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Paper,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Select,
// } from "@mui/material";

// const validationSchema = Yup.object({
//   fullName: Yup.string().required("Name is required"),
//   dob: Yup.string().required("Date of Birth is required"),
//   gender: Yup.string().required("Gender is required"),
//   mobile: Yup.string()
//     .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
//     .required("Mobile number is required"),
//   emailAddress: Yup.string().email("Invalid email").required("Email is required"),
//   occupation: Yup.string().required("Occupation is required"),
//   address1: Yup.string().required("Address Line 1 is required"),
//   address2: Yup.string(),
//   country: Yup.string().required("Country is required"),
//   state: Yup.string().required("State is required"),
//   district: Yup.string().required("District is required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required")
//   // confirmPassword: Yup.string()
//   //   .oneOf([Yup.ref("password"), null], "Passwords must match")
//   //   .required("Confirm Password is required"),
// });

// //const handleReg= async () => {
//   //console.log(values)
//     // try {
//     //   const response = await axios.post('http://localhost:8085/ems/v1/register', values);
//      //console.log("resp", Response);
//     //   alert('register success:', response.data);

     
//     //   //localStorage.setItem('token', response.data.token);

//     //   // Navigate('/dashboard');
//     // } catch (error) {
//     //   console.error('register error:', error.response?.data || error.message);

//     //  alert('Invalid credentials')
//     //   //setFieldError('email', 'Invalid credentials');
//     // } finally {
//     //   // setSubmitting(false);
//     // }
  

// const styles = {
//   container: {
//     height: "100%",
//     minHeight: "100vh",
//     width: "100vw",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f3f3f3",
//     padding: "20px",
//   },
//   paper: {
//     padding: "30px",
//     width: "100%",
//     maxWidth: "600px",
//     borderRadius: "8px",
//     backgroundColor: "#fff",
//     boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontWeight: 600,
//   },
//   field: {
//     marginBottom: "16px",
//   },
// };
//  console.log("lvl 1")

// export default function Register() {
//   return (
//     <Formik
//       initialValues={{
//         fullName: "",
//         dob: null,
//         gender: "",
//         mobile: "",
//         emailAddress: "",
//         occupation: "",
//         addressLine1: "",
//         addressLine2: "",
//         country: "",
//         state: "",
//         district: "",
//         password: ""
//       }}
//       validationSchema={validationSchema}
//       onSubmit={
//       (values) => { console.log("Submitted values:", values);}}
//     >
//       {({ values, handleChange, handleBlur, errors, touched }) => (
//         <Box style={styles.container}>
//           <Paper style={styles.paper}>
//             <Typography variant="h5" style={styles.title}>
//               Register
//             </Typography>
//             <Form>
//               <TextField
//                 fullWidth
//                 name="fullName"
//                 label="fullName"
//                 value={values.fullName}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 error={touched.fullName && Boolean(errors.fullName)}
//                 helperText={touched.fullName && errors.fullName}
//                 style={styles.field}
//               />

//               <TextField
//                 fullWidth
//                 name="dob"
//                 label="Date of Birth"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//                 value={values.dob}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 error={touched.dob && Boolean(errors.dob)}
//                 helperText={touched.dob && errors.dob}
//                 style={styles.field}
//               />

//               <FormControl
//                 fullWidth
//                 style={styles.field}
//                 error={touched.gender && Boolean(errors.gender)}
//               >
//                 <InputLabel>Gender</InputLabel>
//                 <Select
//                   name="gender"
//                   value={values.gender}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   label="Gender"
//                 >
                  
//                   <MenuItem value="Male">Male</MenuItem>
//                   <MenuItem value="Female">Female</MenuItem>
                 
//                 </Select>
//                 {touched.gender && errors.gender && (
//                   <Typography variant="caption" color="error">
//                     {errors.gender}
//                   </Typography>
//                 )}
//               </FormControl>

//               <TextField
//                 fullWidth
//                 name="mobile"
//                 label="Mobile"
//                 value={values.mobile}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 error={touched.mobile && Boolean(errors.mobile)}
//                 helperText={touched.mobile && errors.mobile}
//                 style={styles.field}
//               />

//               <TextField
//                 fullWidth
//                 name="emailAddress"
//                 label="emailAddress"
//                 value={values.emailAddress}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 error={touched.emailAddress && Boolean(errors.emailAddress)}
//                 helperText={touched.emailAddress && errors.emailAddress}
//                 style={styles.field}
//               />

//               <FormControl
//                 fullWidth
//                 style={styles.field}
//                 error={touched.occupation && Boolean(errors.occupation)}
//               >
//                 <InputLabel>Occupation</InputLabel>
//                 <Select
//                   name="occupation"
//                   value={values.occupation}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   label="Occupation"
//                 >
//                   <MenuItem value="">Select</MenuItem>
//                   <MenuItem value="Student">Student</MenuItem>
//                   <MenuItem value="Employed">Employed</MenuItem>
//                   <MenuItem value="Unemployed">Unemployed</MenuItem>
//                 </Select>
//                 {touched.occupation && errors.occupation && (
//                   <Typography variant="caption" color="error">
//                     {errors.occupation}
//                   </Typography>
//                 )}
//               </FormControl>

//               <TextField
//                 fullWidth
//                 name="addressLine1"
//                 label="Address Line 1"
//                 value={values.addressLine1}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 error={touched.addressLine1 && Boolean(errors.addressLine1)}
//                 helperText={touched.addressLine1 && errors.addressLine1}
//                 style={styles.field}
//               />

//               <TextField
//                 fullWidth
//                 name="addresLines2"
//                 label="Address Line 2"
//                 value={values.addressLine2}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 style={styles.field}
//               />

//               <FormControl
//                 fullWidth
//                 style={styles.field}
//                 error={touched.country && Boolean(errors.country)}
//               >
//                 <InputLabel>Country</InputLabel>
//                 <Select
//                   name="country"
//                   value={values.country}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   label="Country"
//                 >
//                   <MenuItem value="">Select</MenuItem>
//                   <MenuItem value="India">India</MenuItem>
//                   <MenuItem value="USA">USA</MenuItem>
//                   <MenuItem value="UK">UK</MenuItem>
//                 </Select>
//                 {touched.country && errors.country && (
//                   <Typography variant="caption" color="error">
//                     {errors.country}
//                   </Typography>
//                 )}
//               </FormControl>

//               <FormControl
//                 fullWidth
//                 style={styles.field}
//                 error={touched.state && Boolean(errors.state)}
//               >
//                 <InputLabel>State</InputLabel>
//                 <Select
//                   name="state"
//                   value={values.state}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   label="State"
//                 >
//                   <MenuItem value="">Select</MenuItem>
//                   <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
//                   <MenuItem value="Kerala">Kerala</MenuItem>
//                   <MenuItem value="Karnataka">Karnataka</MenuItem>
//                 </Select>
//                 {touched.state && errors.state && (
//                   <Typography variant="caption" color="error">
//                     {errors.state}
//                   </Typography>
//                 )}
//               </FormControl>

//               <FormControl
//                 fullWidth
//                 style={styles.field}
//                 error={touched.district && Boolean(errors.district)}
//               >
//                 <InputLabel>District</InputLabel>
//                 <Select
//                   name="district"
//                   value={values.district}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   label="District"
//                 >
//                   <MenuItem value="">Select</MenuItem>
//                   <MenuItem value="Thoothukudi">Thoothukudi</MenuItem>
//                   <MenuItem value="Madurai">Madurai</MenuItem>
//                   <MenuItem value="Chennai">Chennai</MenuItem>
//                 </Select>
//                 {touched.district && errors.district && (
//                   <Typography variant="caption" color="error">
//                     {errors.district}
//                   </Typography>
//                 )}
//               </FormControl>

//               <TextField
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 error={touched.password && Boolean(errors.password)}
//                 helperText={touched.password && errors.password}
//                 style={styles.field}
//               />

//               {/* <TextField
//                 fullWidth
//                 name="confirmPassword"
//                 label="Confirm Password"
//                 type="password"
//                 value={values.confirmPassword}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 error={
//                   touched.confirmPassword && Boolean(errors.confirmPassword)
//                 }
//                 helperText={touched.confirmPassword && errors.confirmPassword}
//                 style={styles.field}
//               /> */}

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 style={{ marginTop: "16px" }}
//               >
//                 Register
//               </Button>
//             </Form>
//             <Typography variant="body2" align="center">
//               Having account?{" "}
//               <Link to="/login" style={{ color: "blue" }}>
//                 Click to Login
//               </Link>
//             </Typography>
//           </Paper>
//         </Box>
//       )}
//     </Formik>
//   );
// }

import React from 'react';
import { TextField, Button, MenuItem, Box, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const genderOptions = [
  { value: 1, label: 'Male' },
  { value: 2, label: 'Female' }
];

const roleOptions = [
  { value: 'user', label: 'User' },
  { value: 'admin', label: 'Admin' }
];

const RegisterSchema = Yup.object().shape({
  emailAddress: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
  fullName: Yup.string().required('Required'),
  dob: Yup.date().nullable(),
  gender: Yup.number().required(),
  mobile: Yup.string().matches(/^\d{10}$/, 'Must be 10 digits'),
  occupation: Yup.string(),
  addressLine1: Yup.string(),
  addressLine2: Yup.string(),
  district: Yup.string(),
  state: Yup.string(),
  country: Yup.string(),
  role: Yup.string()
});

const Register = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post('http://localhost:8085/ems/v1/register', {
        emailAddress: values.emailAddress,
        password: values.password,
        fullName: values.fullName,
        dob: values.dob || '',
        gender: values.gender || 1,
        occupation: values.occupation || 'student',
        mobile: values.mobile || '',
        addressLine1: values.addressLine1 || '',
        addressLine2: values.addressLine2 || '',
        district: values.district || '',
        state: values.state || '',
        country: values.country || '',
        role: values.role || 'user'
      });

      alert('Registration successful');
      resetForm();
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed');
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Typography variant="h5" gutterBottom>Register</Typography>
      <Formik
        initialValues={{
          emailAddress: '',
          password: '',
          fullName: '',
          dob: '',
          gender: 1,
          occupation: 'student',
          mobile: '',
          addressLine1: '',
          addressLine2: '',
          district: '',
          state: '',
          country: '',
          role: 'user'
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <TextField
              name="emailAddress"
              label="Email"
              fullWidth
              margin="normal"
              value={values.emailAddress}
              onChange={handleChange}
              error={touched.emailAddress && !!errors.emailAddress}
              helperText={touched.emailAddress && errors.emailAddress}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={values.password}
              onChange={handleChange}
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
            />
            <TextField
              name="fullName"
              label="Full Name"
              fullWidth
              margin="normal"
              value={values.fullName}
              onChange={handleChange}
              error={touched.fullName && !!errors.fullName}
              helperText={touched.fullName && errors.fullName}
            />
            <TextField
              name="dob"
              label="Date of Birth"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              value={values.dob}
              onChange={handleChange}
            />
            <TextField
              name="gender"
              label="Gender"
              select
              fullWidth
              margin="normal"
              value={values.gender}
              onChange={handleChange}
            >
              {genderOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
              ))}
            </TextField>
            <TextField
              name="mobile"
              label="Mobile"
              fullWidth
              margin="normal"
              value={values.mobile}
              onChange={handleChange}
              error={touched.mobile && !!errors.mobile}
              helperText={touched.mobile && errors.mobile}
            />
            <TextField
              name="occupation"
              label="Occupation"
              fullWidth
              margin="normal"
              value={values.occupation}
              onChange={handleChange}
            />
            <TextField
              name="addressLine1"
              label="Address Line 1"
              fullWidth
              margin="normal"
              value={values.addressLine1}
              onChange={handleChange}
            />
            <TextField
              name="addressLine2"
              label="Address Line 2"
              fullWidth
              margin="normal"
              value={values.addressLine2}
              onChange={handleChange}
            />
            <TextField
              name="district"
              label="District"
              fullWidth
              margin="normal"
              value={values.district}
              onChange={handleChange}
            />
            <TextField
              name="state"
              label="State"
              fullWidth
              margin="normal"
              value={values.state}
              onChange={handleChange}
            />
            <TextField
              name="country"
              label="Country"
              fullWidth
              margin="normal"
              value={values.country}
              onChange={handleChange}
            />
            <TextField
              name="role"
              label="Role"
              select
              fullWidth
              margin="normal"
              value={values.role}
              onChange={handleChange}
            >
              {roleOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
              ))}
            </TextField>

            <Button variant="contained" color="primary" fullWidth type="submit" sx={{ mt: 2 }}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Register;