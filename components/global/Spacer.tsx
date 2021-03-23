import { Box } from "rebass";

type Props = {
  amount: number;
};

const Spacer = ({ amount }: Props) => {
  return <Box sx={{ pb: amount }}></Box>;
};

export default Spacer;
