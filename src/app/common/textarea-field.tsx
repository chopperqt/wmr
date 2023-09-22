import { useController } from "react-hook-form";

import { CustomTextarea } from "@/app/components";
import { FieldProps } from "@/app/interfaces/field-props";

interface TextareaFieldProps extends FieldProps {
  label?: string;
  full?: boolean;
}

export const TextareaField = ({
  control,
  name,
  rules,
  label,
  full,
}: TextareaFieldProps) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <CustomTextarea
      isRequired={!!rules?.required}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error?.message}
      full={full}
    />
  );
};
