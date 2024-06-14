import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
//import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { selectNumberFilter } from "../../redux/filters/selectors";
export default function SearchBox() {
  const dispatch = useDispatch();

  //const filter = useSelector(selectNameFilter);
  const filterNumber = useSelector(selectNumberFilter);

  const handleFilter = (e) => {
    //const name = e.target.value.trim();
    const number = e.target.value.trim();
    dispatch(changeFilter(number));
  };
  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        className={css.inputBox}
        value={filterNumber }
        onChange={handleFilter}
      ></input>
    </div>
  );
}
