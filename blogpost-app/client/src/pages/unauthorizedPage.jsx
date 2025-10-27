export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold text-red-600 mb-2">Unauthorized</h1>
      <p className="text-gray-700">
        You must be logged in to access this page.
      </p>
    </div>
  );
}
