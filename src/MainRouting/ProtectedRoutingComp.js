import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutingComp = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (!user) {
      navigate("/"); // Redirect to login page if user is not authenticated
    }
  }, [navigate]);

  return <Component />;
};

export default ProtectedRoutingComp;
