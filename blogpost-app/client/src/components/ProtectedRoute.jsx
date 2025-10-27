import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const url = "/api/auth/verify";
        const body = {
          credentials: "include", // include cookies
        };
        const res = await axios.get(url, body);

        if (res.status === 200 && res.data.valid) {
          setAuthorized(true);
        } else {
          setAuthorized(false);
        }
      } catch (error) {
        console.error("Verification error:", error);
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Checking authorization...</div>;
  }

  if (!authorized) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
