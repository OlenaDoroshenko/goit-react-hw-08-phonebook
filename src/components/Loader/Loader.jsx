import { ThreeDots } from 'react-loader-spinner';

const Loader = () => (
  <ThreeDots
    height="200"
    width="200"
    radius="9"
    color="#11998e"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
);

export default Loader;