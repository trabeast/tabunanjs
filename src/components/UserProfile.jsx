/**
 * @typedef {Object} UserProfileProps
 * @property {React.ReactNode} children
 *
 * @param {UserProfileProps} props
 */

const UserProfile = ({children}) => {
  return (
    <>
      <button>{children}</button>
      <button className="ml-5">Sign Out</button>
    </>
  );
};

export default UserProfile;
