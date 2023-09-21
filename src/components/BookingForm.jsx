import Button from "./Button";
import Input from "./Input";

/**
 * @type {{props: React.FormHTMLAttributes}} BookingFormProps
 * @param {BookingFormProps} props
 */
export default function BookingForm({...props}) {
  return (
    <form onSubmit={(evt) => evt.preventDefault()} {...props}>
      <Input
        type="email"
        placeholder="user@sample.com"
        autocomplete="off"
      ></Input>
      <br />
      <Input type="password" autocomplete="off"></Input>
      <br />
      <Button>
        <span className="italic">Continue</span>
      </Button>
    </form>
  );
}
