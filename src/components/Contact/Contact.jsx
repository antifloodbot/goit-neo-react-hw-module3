import css from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={css.item}>
      <div className={css.info}>
        <p className={css.name}>👤 {name}</p>
        <p className={css.number}>📞 {number}</p>
      </div>

      <button className={css.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}