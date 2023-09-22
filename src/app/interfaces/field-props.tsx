import { ControllerProps } from "react-hook-form";

export interface FieldProps {
  control: any;
  name: string;
  rules?: ControllerProps["rules"];
}
