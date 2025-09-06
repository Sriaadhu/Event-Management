import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Grid,
  Stack,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { useParams } from "react-router-dom";

// Validation Schema
const EventSchema = Yup.object().shape({
  eventName: Yup.string().required("Event Name is required"),
  eventDescription: Yup.string(),
  eventDate: Yup.string().required("Date is required"),
  eventLocation: Yup.string(),
  eventLink: Yup.string().url("Invalid URL"),
  eventVideoLink: Yup.string().url("Invalid Video URL"),
  eventImageLink: Yup.string().url("Invalid Image URL"),
  publishFrom: Yup.string().required("*"),
  publishTo: Yup.string().required("*"),
});

const EditEvents = () => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8085/ems/v1/event/${id}`
        );
        const data = response.data;

        setInitialValues({
          eventName: data.event_name || "",
          eventDescription: data.event_description || "",
          eventDate: data.event_dataid || "",
          eventLocation: data.event_location || "",
          eventLink: data.event_link || "",
          eventVideoLink: data.event_video_link || "",
          eventImageLink: data.event_image_link || "",
          publishFrom: data.publish_from || "",
          publishTo: data.publish_to || "",
        });
      } catch (error) {
        console.error("Error fetching event:", error);
        alert("Failed to load event data");
      }
    };

    fetchEvent();
  }, [id]);

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Updated Event Values", values);
    try {
      const response = await axios.put(
        `http://localhost:8085/ems/v1/event/update/${id}`,
        {
          ...values,
          status: values.status ?? 1,
        }
      );
      console.log("resp", response);
      alert("Event updated successfully");
      resetForm();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to update event");
    }
  };

  if (!initialValues) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Card sx={{ width: "800" }}>
        <CardHeader title="Edit Event" sx={{ textAlign: "center" }} />
        <CardContent>
          <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={EventSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange }) => (
              <Form>
                <Grid container spacing={2}>
                  {/* Column 1 */}
                  <Grid item xs={12} md={5}>
                    <Stack spacing={2}>
                      <TextField
                        name="eventName"
                        label="Event Name"
                        value={values.eventName}
                        onChange={handleChange}
                        error={touched.eventName && !!errors.eventName}
                        helperText={touched.eventName && errors.eventName}
                      />
                      <TextField
                        name="eventDescription"
                        label="Event Description"
                        multiline
                        value={values.eventDescription}
                        onChange={handleChange}
                      />
                      <TextField
                        name="eventDate"
                        label="Event Date"
                        value={values.eventDate}
                        onChange={handleChange}
                      />
                    </Stack>
                  </Grid>

                  {/* Column 2 */}
                  <Grid item xs={12} md={5}>
                    <Stack spacing={2}>
                      <TextField
                        name="eventLocation"
                        label="Location"
                        value={values.eventLocation}
                        onChange={handleChange}
                      />
                      <TextField
                        name="eventLink"
                        label="Event Link"
                        value={values.eventLink}
                        onChange={handleChange}
                        error={touched.eventLink && !!errors.eventLink}
                        helperText={touched.eventLink && errors.eventLink}
                      />
                      <TextField
                        name="eventVideoLink"
                        label="Video Link"
                        value={values.eventVideoLink}
                        onChange={handleChange}
                        error={
                          touched.eventVideoLink && !!errors.eventVideoLink
                        }
                        helperText={
                          touched.eventVideoLink && errors.eventVideoLink
                        }
                      />
                    </Stack>
                  </Grid>

                  {/* Column 3 */}
                  <Grid item xs={12} md={5}>
                    <Stack spacing={2}>
                      <TextField
                        name="eventImageLink"
                        label="Image Link"
                        value={values.eventImageLink}
                        onChange={handleChange}
                        error={
                          touched.eventImageLink && !!errors.eventImageLink
                        }
                        helperText={
                          touched.eventImageLink && errors.eventImageLink
                        }
                      />
                      <TextField
                        name="publishFrom"
                        label="Publish From"
                        value={values.publishFrom}
                        onChange={handleChange}
                      />
                      <TextField
                        name="publishTo"
                        label="Publish To"
                        value={values.publishTo}
                        onChange={handleChange}
                      />
                    </Stack>
                  </Grid>
                </Grid>

                <Box display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                    sx={{ mt: 3 }}
                  >
                    Update Event
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EditEvents;
