import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import { Box } from "@mui/system";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid username or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
      }}
    >
      {/* Animated Blobs */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: "50%",
            top: "-100px",
            left: "-100px",
            animation: "moveBlob1 15s infinite alternate",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            width: "500px",
            height: "500px",
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            bottom: "-150px",
            right: "-150px",
            animation: "moveBlob2 20s infinite alternate",
          },
          "@keyframes moveBlob1": {
            "0%": { transform: "translateX(0px) translateY(0px) scale(1)" },
            "100%": { transform: "translateX(50px) translateY(50px) scale(1.2)" },
          },
          "@keyframes moveBlob2": {
            "0%": { transform: "translateX(0px) translateY(0px) scale(1)" },
            "100%": { transform: "translateX(-50px) translateY(-50px) scale(1.2)" },
          },
        }}
      ></Box>

      <Container maxWidth="xs">
        <Paper
          elevation={10}
          sx={{
            position: "relative",
            padding: 4,
            borderRadius: "16px",
            textAlign: "center",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2)",
            color: "#fff",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ fontFamily: "Poppins, sans-serif", color: "#fff" }}
          >
            Welcome Back! 👋
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            mb={3}
            sx={{ fontWeight: "300", color: "#ddd" }}
          >
            Enter your credentials to access your dashboard.
          </Typography>

          <form onSubmit={handleLogin}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(255, 255, 255, 0.5)" },
                  "&:hover fieldset": { borderColor: "#fff" },
                  "&.Mui-focused fieldset": { borderColor: "#fff" },
                  "& input": { color: "#fff" },
                },
                "& .MuiInputLabel-root": { color: "#ddd" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#fff" },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(255, 255, 255, 0.5)" },
                  "&:hover fieldset": { borderColor: "#fff" },
                  "&.Mui-focused fieldset": { borderColor: "#fff" },
                  "& input": { color: "#fff" },
                },
                "& .MuiInputLabel-root": { color: "#ddd" },
                "& .MuiInputLabel-root.Mui-focused": { color: "#fff" },
              }}
            />

            {error && (
              <Typography color="error" mt={1} sx={{ fontWeight: "bold" }}>
                {error}
              </Typography>
            )}

            <Box mt={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                sx={{
                  borderRadius: "8px",
                  background: "linear-gradient(45deg, #ff9a9e, #fad0c4)",
                  color: "#333",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(45deg, #fad0c4, #ff9a9e)",
                    transform: "scale(1.05)",
                    transition: "transform 0.2s ease-in-out",
                  },
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
