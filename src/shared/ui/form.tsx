import { Controller } from "react-hook-form";
import { ComponentType } from "react";
import { ControllerProps } from "react-hook-form";

interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  errorMsg?: string;
}

interface IFormInputProps extends Omit<ControllerProps<any>, "render"> {
  className?: string;
  label?: string;
  type?: IInputProps["type"];
  Component: ComponentType<IInputProps>;
}

type InputSubType = React.FC<
  Omit<IFormInputProps, "Component">
>;

type InputType = React.FC<IFormInputProps> & {
  Text: InputSubType;
};

export const UIInput: InputType = ({
  name,
  className,
  label,
  type,
  control,
  rules,
  Component,
}: IFormInputProps) => {
  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Component
          type={type}
          className={className}
          onChange={onChange}
          value={value ?? ""}
          label={label}
          errorMsg={error ? error.message || "Enter a valid value" : undefined}
        />
      )}
    />
  );
};


export function UITextInput({
  label,
  errorMsg,
  ...rest
}: IInputProps) {
  const labelClassName = errorMsg ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white"
  const inputClassName = errorMsg ?
    "bg-red-50 border-red-500 text-red-900 focus:ring-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" :
    "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  return (
    <div>
      <label className={`block mb-2 text-sm font-medium ${labelClassName}`}>{label}</label>
      <input {...rest} className={`border text-sm rounded-lg block w-full p-2.5 ${inputClassName}`} />
      {errorMsg &&
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errorMsg}
        </p>
      }
    </div>

  );
}
const textInput: InputSubType = (props) => (
  <UIInput {...props} Component={UITextInput} />)

UIInput.Text = textInput
