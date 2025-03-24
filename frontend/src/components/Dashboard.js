import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Paper, Typography, CircularProgress, Box, IconButton, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const response = await axios.get("http://localhost:5000/api/dashboard", {
          headers: { Authorization: token },
        });

        setData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Blobs */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "50%",
            top: "-100px",
            left: "-100px",
            animation: "blob1 15s infinite alternate",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            width: "500px",
            height: "500px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            bottom: "-150px",
            right: "-150px",
            animation: "blob2 20s infinite alternate",
          },
          "@keyframes blob1": {
            "0%": { transform: "translateX(0px) translateY(0px) scale(1)" },
            "100%": { transform: "translateX(50px) translateY(50px) scale(1.2)" },
          },
          "@keyframes blob2": {
            "0%": { transform: "translateX(0px) translateY(0px) scale(1)" },
            "100%": { transform: "translateX(-50px) translateY(-50px) scale(1.2)" },
          },
        }}
      ></Box>

      <Container maxWidth="md">
        <Paper
          elevation={10}
          sx={{
            position: "relative",
            padding: 4,
            borderRadius: "16px",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontFamily: "Poppins, sans-serif", color: "#fff" }}>
            🚀 Dashboard
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3} sx={{ fontWeight: "300", color: "#ddd" }}>
            Welcome to your personalized dashboard!
          </Typography>

          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
              {data.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedItem(item)}
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    padding: "12px",
                    marginBottom: "8px",
                    borderRadius: "8px",
                    backdropFilter: "blur(6px)",
                    color: "#fff",
                    fontWeight: "bold",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  {item.title}
                </motion.li>
              ))}
            </Box>
          )}
        </Paper>
      </Container>

      {/* Animated Popup for Description */}
      <AnimatePresence>
        {selectedItem && (
          <Dialog
            open={!!selectedItem}
            onClose={() => setSelectedItem(null)}
            maxWidth="sm"
            fullWidth
            PaperProps={{
              sx: {
                background: "rgba(30, 60, 114, 0.9)",
                color: "#fff",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "center",
              },
            }}
          >
            <DialogTitle>
              <Typography variant="h5" fontWeight="bold">{selectedItem.title}</Typography>
              <IconButton
                onClick={() => setSelectedItem(null)}
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "#fff",
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="body1" sx={{ fontWeight: "300", color: "#ddd" }}>
                  {selectedItem.description}
                </Typography>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Dashboard;
