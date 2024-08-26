import { ClipLoader } from "react-spinners";

const Loader = ({ color, loading}) => {
    return(
        
    <ClipLoader
    color={color}
    loading={loading}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
    )
}
export default Loader;