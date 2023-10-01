const {forwardRef} = require("react");

/**
 * @type {{props: React.InputHTMLAttributes} & {label: string}} InputProps
 * @param {InputProps} props
 */
const Input = forwardRef(function Input({label, ...props}, ref) {
  return (
    <>
      <label className="block" htmlFor={props.name}>{`${label}:`}</label>
      <input
        ref={ref}
        className="border text-black rounded bg-gray m-2 px-2"
        {...props}
      />
    </>
  );
});

export default Input;
