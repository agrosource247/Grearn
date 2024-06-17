import UseAuth from "./UseAuth";

const UseRefreshToken = () => {
  const { setAuth } = UseAuth();

  const refresh = async () => {
    const response = await apiRequest.get("/auth/refresh");
    setAuth((prev) => {
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default UseRefreshToken;
