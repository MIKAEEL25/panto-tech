const Error: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="bg-red-100 w-1/2 m-auto border border-red-400 text-red-700 p-4 lg:text-5xl text-center rounded">
      {message}
    </div>
  );
};

export default Error;
