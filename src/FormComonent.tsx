import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";

const FileUploadForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone:string) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>): Promise<void> =>  {
    event.preventDefault();

    // Clear previous errors
    setError({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    let formHasError = false;

    // Validate fields
    if (!name) {
      setError((prev) => ({ ...prev, name: "שדה זה דרוש" }));
      formHasError = true;
    }
    if (!phone) {
      setError((prev) => ({ ...prev, phone: "שדה זה דרוש" }));
      formHasError = true;
    } else if (!isValidPhone(phone)) {
      setError((prev) => ({ ...prev, phone: "מספר טלפון לא חוקי" }));
      formHasError = true;
    }
    if (email && !isValidEmail(email)) {
      setError((prev) => ({ ...prev, email: "כתובת אימייל לא חוקית" }));
      formHasError = true;
    }

    if (formHasError) return;

    setIsSubmitting(true);

    // Create FormData and append the data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("message", message);
    
    try {
      console.log("gfdg")
      const response = await axios.post("http://localhost:3000/upload/send-email/", formData, {
       method: 'POST',
        // body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Form submitted successfully:", response.data);
      alert("הטופס נשלח בהצלחה!");
      // Clear the form
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("שליחת הטופס נכשלה. נסה שוב מאוחר יותר.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          id="name"
          type="text"
          required
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!error.name}
          helperText={error.name}
          placeholder="שם"
          aria-label="שם"
        />
        <TextField
          id="phone"
          type="tel"
          required
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={!!error.phone}
          helperText={error.phone}
          placeholder="מספר נייד"
          aria-label="מספר נייד"
        />
        <TextField
          id="email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!error.email}
          helperText={error.email}
          placeholder="אימייל"
          aria-label="אימייל"
        />
        <TextField
          id="message"
          multiline
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="ההודעה שלך:"
          fullWidth
          aria-label="ההודעה שלך"
        />
      </Box>

      <Button
        variant="contained"
        type="submit"
        sx={{ width: "100%" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "טוען..." : "צור איתי קשר"}
      </Button>
    </Box>
  );
};

export default FileUploadForm;
