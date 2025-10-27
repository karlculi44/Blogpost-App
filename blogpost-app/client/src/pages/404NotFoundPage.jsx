import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
      <div className="text-center">
        <Search className="mx-auto w-16 h-16 text-gray-500" />
        <h1 className="text-6xl font-bold mt-4">404</h1>
        <p className="text-xl mt-2">Page Not Found</p>
        <p className="text-gray-500 mt-2">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
