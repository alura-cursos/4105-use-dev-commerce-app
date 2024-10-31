import Input, { InputProps } from "../Input";

type IconInputProps = {
  children: React.ReactNode;
} & InputProps;

const IconInput = ({ children, ...props }: IconInputProps) => {
  return (
    <div>
      <Input {...props} />
      <div>{children}</div>
    </div>
  );
};
export default IconInput;
