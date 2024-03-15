import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Context";

function ProtectedRoute() {
  const { loading, currentUser } = useAuth();
  console.log(currentUser, loading);
  if (loading)
    return (
      <div className="text-white text3xl text-center py-10"> loading...</div>
    );
  return currentUser ? <Outlet /> : <Navigate to="/signup" />;
}

export default ProtectedRoute;
