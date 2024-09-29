import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center h-screen py-6">
      <div className="w-[80%] border rounded shadow-lg">
        <div className='bg-slate-300 w-[100%] h-5'></div>
        <div className="flex justify-center items-center p-5 font-bold text-2xl">Page not found!</div>
        <div id="error-page">
          <p className="text-center">Sorry, an unexpected error has occurred.</p>
          <p className="text-center">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
        <div className="flex justify-center items-center ">
        </div>
        <div className='bg-slate-300 w-[100%] h-5'></div>
      </div>
    </div>
  );
}