import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const FileUploadForm = () => {
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    file1: "",
    file2: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Clear any previous errors
    setError({
      file1: "",
      file2: "",
    });

    let formHasError = false;

    // Check if required fields are filled
    if (!file1) {
      setError((prev) => ({ ...prev, file1: "שדה זה דרוש" }));
      formHasError = true;
    }
    if (!file2) {
      setError((prev) => ({ ...prev, file2: "שדה זה דרוש" }));
      formHasError = true;
    }

    if (formHasError) return;

    console.log("Form submitted:", { file1, file2, email, message });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "200%", // Doubled width for larger display
        maxWidth: "900px", // Responsive max-width
        minHeight: "300px", // Increased height
        margin: "0 auto",
        padding: 4, // Extra padding for spacing
        display: "flex",
        flexDirection: "column",
        gap: 3,
        borderRadius: "8px",
        boxSizing: "border-box", // Ensure consistent layout
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          id="file1"
          type="text"
          required
          fullWidth
          value={file1}
          onChange={(e) => setFile1(e.target.value)}
          placeholder="שם:"
          error={!!error.file1}
          helperText={error.file1}
        />

        <TextField
          id="file2"
          type="text"
          required
          fullWidth
          value={file2}
          onChange={(e) => setFile2(e.target.value)}
          placeholder="טלפון"
          error={!!error.file2}
          helperText={error.file2}
        />

        <TextField
          id="email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="אימייל"
        />

        <TextField
          id="message"
          multiline
          rows={6} // Increased rows for more space
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="ההודעה שלך:"
          fullWidth
        />
      </Box>

      <Button variant="contained" type="submit" sx={{ 
        width: "100%", // Doubled width for larger display
        minHeight: "20px", // Increased height
        margin: "0 auto",
        padding: 4, // Extra padding for spacing
        display: "flex",
        flexDirection: "column",
        gap: 3,
        borderRadius: "8px",
        boxSizing: "border-box", // Ensure consistent layout
}}>
        צור איתי קשר
      </Button>
    </Box>
  );
};

export default FileUploadForm;
