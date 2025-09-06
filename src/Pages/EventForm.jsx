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

import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Divider,
  Stack,
  Paper,
  Card,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";

const EventSchema = Yup.object().shape({
  eventName: Yup.string().required("Event name is required"),
  eventDescription: Yup.string().required("Event description is required"),
  eventDate: Yup.date().required("Event date is required"),
  eventLocation: Yup.string().required("Location is required"),
  eventLink: Yup.string().url("Invalid URL"),
  eventVideoLink: Yup.string().url("Invalid URL"),
  eventImageLink: Yup.string().url("Invalid URL"),
  publishFrom: Yup.date().required("Publish From is required"),
  publishTo: Yup.date().required("Publish To is required"),
});

const EventForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:8085/ems/v1/event/add",
        values
      );
      alert("Event created successfully");
      resetForm();
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Event creation error:", error);
      alert("Event creation failed");
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Create Event
      </Typography>

      {/* Navigation Button */}
      <Button component={Link} to="/" color="inherit" sx={{ mb: 2 }}>
        Back to Home
      </Button>

      <Formik 
        initialValues={{
          eventName: "",
          eventDescription: "",
          eventDate: "",
          eventLocation: "",
          eventLink: "",
          eventVideoLink: "",
          eventImageLink: "",
          publishFrom: "",
          publishTo: "",
        }}
        validationSchema={EventSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Card>
          <Form>
            <Paper sx={{ p: 3 }}>
              <Grid container spacing={2}>
                {/* Event Name */}
                <Grid size ={4} item xs={12} sm={6} md={4}>
                  <TextField
                  sx={{ width: 250, height: 10, pb: 8 }}
                    name="eventName"
                    label="Event Name"
                    fullWidth
                    value={values.eventName}
                    onChange={handleChange}
                    error={touched.eventName && !!errors.eventName}
                    helperText={touched.eventName && errors.eventName}
                  />
                </Grid>

                {/* Event Description */}
                <Grid size ={4} item xs={12} sm={6} md={4}>
                  <TextField
                  sx={{ width: 250, height: 10, pb: 8 }}
                    name="eventDescription"
                    label="Event Description"
                    fullWidth
                    // multiline
                    // rows={3}
                    value={values.eventDescription}
                    onChange={handleChange}
                    error={
                      touched.eventDescription && !!errors.eventDescription
                    }
                    helperText={
                      touched.eventDescription && errors.eventDescription
                    }
                  />
                </Grid>

                {/* Event Date */}
                <Grid size ={4} item xs={12} sm={6} md={4}>
                  <TextField
                  sx={{ width: 250, height: 10, pb: 8 }}
                    name="eventDate"
                    label="Event Date"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={values.eventDate}
                    onChange={handleChange}
                    error={touched.eventDate && !!errors.eventDate}
                    helperText={touched.eventDate && errors.eventDate}
                  />
                </Grid>

                {/* Event Location */}
                <Grid item xs={12} sm={6} md={4} size ={4}>
                  <TextField
                  sx={{ width: 250, height: 10, pb: 8 }}
                    name="eventLocation"
                    label="Event Location"
                    fullWidth
                    value={values.eventLocation}
                    onChange={handleChange}
                    error={touched.eventLocation && !!errors.eventLocation}
                    helperText={touched.eventLocation && errors.eventLocation}
                  />
                </Grid>

                {/* Optional Links */}
                <Grid size ={4} item xs={12} sm={6} md={4}>
                  <TextField
                  sx={{ width: 250, height: 10, pb: 8 }}
                    name="eventLink"
                    label="Event Link (optional)"
                    fullWidth
                    value={values.eventLink}
                    onChange={handleChange}
                    error={touched.eventLink && !!errors.eventLink}
                    helperText={touched.eventLink && errors.eventLink}
                  />
                </Grid>

                <Grid size ={4} item xs={12} sm={6} md={4}>
                  <TextField
                  sx={{ width: 250, height: 10, pb: 8 }}
                    name="eventVideoLink"
                    label="Event Video Link (optional)"
                    fullWidth
                    value={values.eventVideoLink}
                    onChange={handleChange}
                    error={
                      touched.eventVideoLink && !!errors.eventVideoLink
                    }
                    helperText={
                      touched.eventVideoLink && errors.eventVideoLink
                    }
                  />
                </Grid>

                <Grid size ={4} item xs={12} sm={6} md={4}>
                  <TextField
                  sx={{ width: 250, height: 10, pb: 8 }}
                    name="eventImageLink"
                    label="Event Image Link (optional)"
                    fullWidth
                    value={values.eventImageLink}
                    onChange={handleChange}
                    error={
                      touched.eventImageLink && !!errors.eventImageLink
                    }
                    helperText={
                      touched.eventImageLink && errors.eventImageLink
                    }
                  />
                </Grid>

                {/* Publish Dates */}
                <Grid size ={4} item xs={12} sm={6} md={4}>
                  <TextField
                  sx={{ width: 250, height: 10, pb: 8 }}
                    name="publishFrom"
                    label="Publish From"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={values.publishFrom}
                    onChange={handleChange}
                    error={touched.publishFrom && !!errors.publishFrom}
                    helperText={touched.publishFrom && errors.publishFrom}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={4} size ={4}>
                  <TextField
                  sx={{ width: 250, height: 10, pb: 8 }}
                    name="publishTo"
                    label="Publish To"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={values.publishTo}
                    onChange={handleChange}
                    error={touched.publishTo && !!errors.publishTo}
                    helperText={touched.publishTo && errors.publishTo}
                  />
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              {/* Submit Button */}
              <Stack direction="row" justifyContent="flex-end" spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Add Event
                </Button>
              </Stack>
            </Paper>
          </Form> </Card>
        )}
      </Formik>
      <Button component={Link} to="/home" color="inherit" sx={{ mb: 2 }} justifyContent="flex">
        Back to Home
      </Button>
    </Box>
  );
};

export default EventForm;
