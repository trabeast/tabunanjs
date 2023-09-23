/**
 * @type {{props: React.InputHTMLAttributes}} InputProps
 * @param {InputProps} props
 */
export default function Input(props) {
  return (
    <input className="border text-black rounded bg-gray m-2 px-2" {...props} />
  );
}
