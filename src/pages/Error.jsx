const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="grid w-full h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500">We cannot find that page.</p>

          <a
            href="/"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-black rounded hover:bg-neutral-700 focus:outline-none focus:ring">
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
