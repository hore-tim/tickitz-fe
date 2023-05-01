import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const privateRoute = (WrappedComponent) => {
  const Auth = (props) => {
    const data = useSelector((state) => state.auth.data.token);
    const router = useRouter();
    useEffect(() => {
      if (!data) {
        router.push("/login");
      }
    }, [data, router]);

    if (data) {
      return <WrappedComponent {...props} />;
    }
    // return <Loader />;
  };

  return Auth;
};

export default privateRoute;
