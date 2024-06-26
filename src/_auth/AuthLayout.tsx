import { useUserContext } from "@/context/useContext";
import { Outlet, Navigate } from "react-router-dom";
const AuthLayout = () => {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img src="/assets/images/side-img.svg" className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat" alt="logo"/>
        </>
      )}
    </>
  );
};

export default AuthLayout;
