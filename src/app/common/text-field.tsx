import { CustomInput } from "@/app/components";
import { FieldProps } from "@/app/interfaces/field-props";
import { useController } from "react-hook-form";

interface TextFieldProps extends FieldProps {
  label?: string;
  full?: boolean;
  placeholder?: string;
}

export const TextField = ({
  control,
  name,
  rules,
  label,
  full,
  placeholder,
}: TextFieldProps) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <CustomInput
      isRequired={!!rules?.required}
      label={label}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error?.message}
      full={full}
    />
  );
};
