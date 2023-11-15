import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Loading, Footer } from "../components";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element mt-16 lg:p-0">
          <Outlet />
        </section>
      )}
      <Footer />
    </div>
  );
};
export default HomeLayout;
