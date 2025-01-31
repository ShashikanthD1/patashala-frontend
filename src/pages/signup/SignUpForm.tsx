import React, { useState, useEffect, ChangeEvent } from "react";
import { useFormik } from "formik";
import { TextField, Checkbox, FormControlLabel, Button, Typography, Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as Yup from "yup";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "./SignUpForm.css";

// OTP Modal Component
interface OTPModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (otp: string) => void;
  otpLength?: number;
}

const OTPModal: React.FC<OTPModalProps> = ({ open, onClose, onSubmit, otpLength = 6 }) => {
  const [otp, setOtp] = useState<string>("");
  const [timer, setTimer] = useState<number>(300);
  const [canResend, setCanResend] = useState<boolean>(false);

  useEffect(() => {
    if (open && timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) setCanResend(true);
  }, [open, timer]);

  const handleOtpChange = (e: ChangeEvent<HTMLInputElement>) =>
    setOtp(e.target.value.replace(/\D/g, "").slice(0, otpLength));

  const handleOtpSubmit = () =>
    otp.length === otpLength
      ? (onSubmit(otp), onClose())
      : alert(`OTP must be ${otpLength} digits.`);

  const handleResendOtp = () => {
    setOtp("");
    setTimer(300);
    setCanResend(false);
    console.log("OTP resent");
  };

  return (
    <Modal open={open} onClose={(e, reason) => reason === "backdropClick" && e.stopPropagation()}>
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "white", p: 4, borderRadius: 2, boxShadow: 24, width: 300 }}>
        <IconButton onClick={onClose} sx={{ position: "absolute", top: 8, right: 20, color: "gray" }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6">Enter OTP</Typography>
        <TextField value={otp} onChange={handleOtpChange} inputProps={{ maxLength: otpLength }} fullWidth sx={{ mt: 2 }} />
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          {canResend
            ? "OTP expired. You can resend it now."
            : `OTP will expire in ${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, "0")} minutes.`}
        </Typography>
        <Button variant="contained" onClick={handleOtpSubmit} sx={{ mt: 2 }} disabled={otp.length !== otpLength}>
          Submit OTP
        </Button>
        {canResend && (
          <Button variant="outlined" onClick={handleResendOtp} sx={{ mt: 2 }}>
            Resend OTP
          </Button>
        )}
      </Box>
    </Modal>
  );
};

// Reusable FormField Component
interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  touched,
}) => (
  <TextField
    label={label}
    variant="outlined"
    fullWidth
    margin="normal"
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    error={touched && Boolean(error)}
    helperText={touched && error}
  />
);

// SignUpForm Component
const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [openOtpModal, setOpenOtpModal] = useState<boolean>(false);

  const formFields = [
    { name: "name", label: "Name", type: "text", validation: Yup.string().required("Name is required") },
    { name: "email", label: "Email", type: "email", validation: Yup.string().email("Invalid email format").required("Email is required") },
    { name: "mobilenumber", label: "Mobile Number", type: "text", validation: Yup.string().matches(/^[0-9]{10}$/, "Mobile number must be 10 digits").required("Mobile number is required") },
    { name: "password", label: "Password", type: "password", validation: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required") },
  ];

  const validationSchema = Yup.object(
    formFields.reduce(
      (acc, { name, validation }) => ({ ...acc, [name]: validation }),
      { acceptedTerms: Yup.boolean().oneOf([true], "You must accept the terms") }
    )
  );

  const formik = useFormik({
    initialValues: formFields.reduce((acc, { name }) => ({ ...acc, [name]: "" }), { acceptedTerms: false }),
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data Submitted:", values);
      setOpenOtpModal(true);
    },
  });

  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={formik.handleSubmit}>
        <Typography variant="h5" gutterBottom>Sign Up</Typography>
        <Typography variant="body2" color="error">
          Already have an account? <RouterLink to="/login">Log in</RouterLink>
        </Typography>

        {formFields.map(({ name, label, type }) => (
          <FormField
            key={name}
            label={label}
            name={name}
            type={type}
            value={formik.values[name]}
            onChange={formik.handleChange}
            error={formik.errors[name]}
            touched={formik.touched[name]}
          />
        ))}

        <FormControlLabel
          control={<Checkbox name="acceptedTerms" checked={formik.values.acceptedTerms} onChange={formik.handleChange} />}
          label="Accept the Terms and Privacy Policy"
        />
        {formik.touched.acceptedTerms && formik.errors.acceptedTerms && (
          <Typography variant="body2" color="error">
            {formik.errors.acceptedTerms}
          </Typography>
        )}

        <Button variant="contained" fullWidth type="submit">Register</Button>
      </form>

      <OTPModal
        open={openOtpModal}
        onClose={() => setOpenOtpModal(false)}
        onSubmit={(otp) => {
          console.log("OTP Submitted:", otp);
          navigate("/schoolList");
        }}
      />
    </div>
  );
};

export default SignUpForm;
