import { useState } from "react";
import { useNavigate } from "react-router";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function LoginOTP() {
  const [otp, setOtp] = useState<string>("");

  const navigate = useNavigate();

  const handleOtpChange = (value: string) => {
    setOtp(value);
    if (value.length === 8) {
      console.log(otp);
      // Send verification request to backend
      navigate("/home");
    }
  };

  return (
    <>
      <InputOTP maxLength={8} value={otp} onChange={handleOtpChange}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
        </InputOTPGroup>
      </InputOTP>
    </>
  );
}
