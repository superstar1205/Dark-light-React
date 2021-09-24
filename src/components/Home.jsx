import React, {useContext} from "react";
import DarkContext from "../context/DarkContext";

const Home = () => {
  const dark = useContext(DarkContext);
  return (
    <>
      <div
        class={`p-5 mb-4 bg-light rounded-3 bg-${
          dark.theme.darkTheme === false ? "light" : "dark"
        }`}
      >
        <div class="container-fluid py-5">
          <h1
            class={`display-5 fw-bold text-${
              dark.theme.darkTheme === false ? "dark" : "light"
            }`}
          >
            Darkight
          </h1>
          <p
            class={`col-md-8 fs-4 text text-${
              dark.theme.darkTheme === false ? "dark" : "light"
            }`}
          >
            Click the Switch Theme button to switch from dark theme to light
            theme or vice-versa.
          </p>
          <button disabled class="btn btn-primary btn-lg" type="button">
            Go To Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
