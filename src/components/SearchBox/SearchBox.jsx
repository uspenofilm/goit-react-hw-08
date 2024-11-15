import css from "./SearchBox.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const newFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label className={css.searchBoxContainer}>
      Find contacts by name
      <input type="text" value={filter} onChange={newFilter}></input>
    </label>
  );
}
