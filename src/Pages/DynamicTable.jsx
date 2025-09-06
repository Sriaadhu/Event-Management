import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EditEvents from "./EditEvents";
import axios from "axios";

const DynamicTable = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDynamicTable();
  }, []);

  const fetchDynamicTable = async () => {
    try {
      const res = await axios.get("http://localhost:8085/ems/v1/event/list");
      console.log(res.data);
      setEvents(res.data);
    } catch (error) {
      console.error("Failed to fetch event list:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleEdit = (event) => {
    navigate(`/editEvent/${event.id}`);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        p: 2,
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#f4f6f8",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "95%",
          minHeight: "90vh",
          overflow: "auto",
        }}
      >
        <CardHeader
          title="Event List"
          sx={{
            textAlign: "center",
            backgroundColor: "#068990ff",
            color: "white",
            py: 2,
          }}
        />
        <CardContent>
          {loading ? (
            <Typography align="center">Loading...</Typography>
          ) : events.length === 0 ? (
            <Typography align="center">No events found.</Typography>
          ) : (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#e0e0e0" }}>
                    <TableCell>S.No</TableCell>
                    <TableCell>Event Name</TableCell>
                    <TableCell>Event Date</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Published On</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events.map((event, index) => (
                    <TableRow key={event.id || index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{event.event_name}</TableCell>
                      <TableCell>{event.event_dataid}</TableCell>
                      <TableCell>{event.event_location}</TableCell>
                      <TableCell>{event.publish_to}</TableCell>
                      <Button
                        variant="contained"
                        color="inherit"
                        sx={{ mb: 2 }}
                        // startIcon = {<EditTIcon />}
                        onClick={() => handleEdit(event)}
                        justifyContent="flex"
                      >
                        Edit
                      </Button>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default DynamicTable;
