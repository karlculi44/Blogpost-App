// src/components/InputField.jsx
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const InputField = ({
  label,
  id,
  type = "text",
  placeholder = "",
  value,
  onChange,
  isSubmitted = false,
  errorMessage = "This field is required",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  const baseStyle =
    "w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 " +
    "bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10";

  const labelStyle = "block text-gray-700 dark:text-gray-200 font-medium mb-1";

  // Check if field is empty when form is submitted
  const showError = isSubmitted && !value.trim();

  return (
    <div className="relative flex flex-col mb-2">
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>

      <input
        type={inputType}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${baseStyle} ${showError ? "border-red-500" : ""}`}
      />

      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      )}

      {showError && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
