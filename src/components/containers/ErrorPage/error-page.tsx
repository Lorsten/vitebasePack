import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section>
      <h1>ops!</h1>
      <p>Sorry, the page could not be found!</p>
      <a href="/">Return home</a>
    </section>
  );
};

export default ErrorPage;
