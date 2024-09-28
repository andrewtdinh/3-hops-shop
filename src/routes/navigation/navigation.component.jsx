import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the nav bar</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;