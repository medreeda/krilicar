import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Added label prop

  rows?: number; // Added rows prop for textarea
  sizeClass?: string;
  fontClass?: string;
  rounded?: string;
  as?: "input" | "textarea"; // Added as prop
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      className = "",
      sizeClass = "h-11 px-4 py-3",
      fontClass = "text-sm font-normal",
      rounded = "rounded-2xl",
      label, // Include label in destructuring
      as = "input", // Default to input

      type = "text", // Default type
      placeholder = "", // Default placeholder
      required = false, // Default required
      ...args
    },
    ref
  ) => {
    if (as === "textarea") {
      return (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={`block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 ${rounded} ${fontClass} ${sizeClass} ${className}`}
          {...(args as TextareaHTMLAttributes<HTMLTextAreaElement>)} // Cast args to TextareaHTMLAttributes
        />
      );
    }

    return (
      <div>
          {label && <label className="mb-2">{label}</label>} {/* Render label if provided */}
          <input

            type={type}
            placeholder={placeholder}
            className={`border border-gray-300 rounded-md p-2 w-full ${className}`}
            style={{ backgroundColor: '#f8f9fa', color: '#000000' }}
            required={required}
          />
          <style jsx>{`
            input::placeholder {
              color: #555;
            }
          `}</style>

          <style jsx>{`
            input::placeholder {
              color: #555;
            }
          `}</style>
      </div>
    );
  }
);

export default Input;
