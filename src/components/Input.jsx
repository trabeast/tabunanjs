const {forwardRef} = require("react");

/**
 * @typedef {Object} InputPropsExt
 * @property {string} label
 *
 * @typedef {{props: React.InputHTMLAttributes} & InputPropsExt} InputProps
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
