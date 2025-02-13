export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Login</h1>
      <form className="flex flex-col mt-4">
        <input
          type="text"
          placeholder="Username"
          className="mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-2 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}

