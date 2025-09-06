import { Box, Typography } from "@mui/material";

export default function Unauthorized()
{
    return (
        <Box p={4}>
            <Typography variant="h4" color="error">
                Unauthorized Access
            </Typography>
        </Box>
    )
}