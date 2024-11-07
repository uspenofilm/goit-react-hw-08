import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

export default function Contact({ data, handleDelete }) {
  return (
    <div className={css.contactContainer}>
      <span className={css.nameNumber}>
        <p>
          <IoPersonSharp className={css.icon} />
          {data.name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {data.number}
        </p>
      </span>
      <button className={css.deleteBtn} onClick={() => handleDelete(data.id)}>
        Delete
      </button>
    </div>
  );
}
