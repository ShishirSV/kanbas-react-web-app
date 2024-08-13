import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext"; // Adjust the import path as needed

export default function Session({ children }: { children: React.ReactNode }) {
  const [pending, setPending] = useState(true);
  const { setUser } = useUser(); // Access the setUser function from context
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
      setUser(currentUser); // Update context with user data
    } catch (err: any) {
      console.error(err);
      navigate("/Kanbas/Account/Signin"); // Redirect to Sign-in page on error
    }
    setPending(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (pending) {
    return <div>Loading...</div>; // Show a loading indicator
  }

  return <>{children}</>; // Render children once profile is fetched
}
