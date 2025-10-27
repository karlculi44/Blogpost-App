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
    "w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 pr-10 transition";

  const labelStyle = "block text-gray-700 font-medium mb-1";

  // Check if field is empty when form is submitted
  const showError = isSubmitted && !value.trim();

  return (
    <div className="relative flex flex-col mb-3">
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>

      <input
        type={inputType}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${baseStyle} ${
          showError && id !== "suffix"
            ? "border-red-500 focus:ring-red-400"
            : ""
        }`}
      />

      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600"
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
