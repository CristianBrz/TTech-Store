import { Link } from "react-router-dom";

const Brand = ({ img }) => {
  return (
    <Link to="/">
      <img className="h-20" src={img} alt="Logo TTechStore" />
    </Link>
  )
}

export default Brand