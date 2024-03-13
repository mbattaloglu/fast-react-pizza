import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type={"small"} onClick={() => dispatch(removeItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
