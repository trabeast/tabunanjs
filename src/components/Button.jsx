/**
 * @type {{children: React.ReactNode, props: ...*}} ButtonProps
 * @param {ButtonProps} props
 */
export default function Button({children, ...props}) {
  return (
    <button className="border-2 rounded m-2 py-1 px-2" {...props}>
      {children}
    </button>
  );
}
