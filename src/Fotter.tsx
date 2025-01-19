import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <div className="main-container">
          <Box
      component="footer"
      sx={{
        backgroundColor: "#282c34",
        color: "white",
        padding: "20px 10px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        "@media (min-width: 600px)": {
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "20px 50px",
        },
      }}
    >
      {/* Left Section: Copyright */}
      <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </Typography>

      {/* Center Section: Social Media Icons */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <IconButton
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white" }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white" }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white" }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white" }}
        >
          <LinkedIn />
        </IconButton>
      </Box>

      {/* Right Section: Links */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
          "@media (min-width: 600px)": {
            justifyContent: "flex-start",
          },
        }}
      >
        <Link href="/about" underline="hover" sx={{ color: "white", fontSize: "0.9rem" }}>
          About
        </Link>
        <Link href="/contact" underline="hover" sx={{ color: "white", fontSize: "0.9rem" }}>
          Contact
        </Link>
        <Link href="/privacy" underline="hover" sx={{ color: "white", fontSize: "0.9rem" }}>
          Privacy Policy
        </Link>
      </Box>
    </Box></div>
  );
};

export default Footer;
