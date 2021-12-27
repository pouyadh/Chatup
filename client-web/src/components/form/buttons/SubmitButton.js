import { LoadingButton } from "@mui/lab";
const SubmitButton = ({ caption, ...props }) => (
  <LoadingButton variant="contained" type="submit" {...props}>
    {caption}
  </LoadingButton>
);
export default SubmitButton;
