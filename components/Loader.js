import styles from '../styles/Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader__container}>
      <svg
        className={styles.large__gear}
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
      >
        <path d="M24 13.306v-2.612l-2.452-.614c-.081-.407-.188-.805-.318-1.192l1.815-1.756-1.306-2.263-2.432.695c-.272-.309-.562-.599-.871-.871l.695-2.432-2.263-1.306-1.756 1.815c-.387-.13-.785-.237-1.192-.318l-.614-2.452h-2.612l-.614 2.452c-.407.081-.805.188-1.192.319l-1.757-1.816-2.262 1.306.695 2.433c-.309.271-.599.562-.871.87l-2.432-.695-1.306 2.262 1.815 1.757c-.13.387-.237.785-.318 1.192l-2.452.614v2.612l2.452.614c.082.407.188.805.318 1.192l-1.815 1.756 1.306 2.263 2.432-.695c.272.308.562.599.871.871l-.695 2.432 2.263 1.306 1.756-1.816c.387.131.785.237 1.192.319l.614 2.452h2.612l.614-2.452c.407-.082.805-.188 1.192-.319l1.756 1.816 2.263-1.306-.695-2.432c.309-.272.599-.563.871-.871l2.432.695 1.306-2.263-1.815-1.756c.131-.387.237-.785.318-1.192l2.452-.614zm-12 2.694c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
      </svg>
      <svg
        className={styles.medium__gear}
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 24 24"
      >
        <path d="M24 13.306v-2.612l-2.452-.614c-.081-.407-.188-.805-.318-1.192l1.815-1.756-1.306-2.263-2.432.695c-.272-.309-.562-.599-.871-.871l.695-2.432-2.263-1.306-1.756 1.815c-.387-.13-.785-.237-1.192-.318l-.614-2.452h-2.612l-.614 2.452c-.407.081-.805.188-1.192.319l-1.757-1.816-2.262 1.306.695 2.433c-.309.271-.599.562-.871.87l-2.432-.695-1.306 2.262 1.815 1.757c-.13.387-.237.785-.318 1.192l-2.452.614v2.612l2.452.614c.082.407.188.805.318 1.192l-1.815 1.756 1.306 2.263 2.432-.695c.272.308.562.599.871.871l-.695 2.432 2.263 1.306 1.756-1.816c.387.131.785.237 1.192.319l.614 2.452h2.612l.614-2.452c.407-.082.805-.188 1.192-.319l1.756 1.816 2.263-1.306-.695-2.432c.309-.272.599-.563.871-.871l2.432.695 1.306-2.263-1.815-1.756c.131-.387.237-.785.318-1.192l2.452-.614zm-12 2.694c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
      </svg>
      <svg
        className={styles.small__gear}
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 24 24"
      >
        <path d="M24 13.306v-2.612l-2.452-.614c-.081-.407-.188-.805-.318-1.192l1.815-1.756-1.306-2.263-2.432.695c-.272-.309-.562-.599-.871-.871l.695-2.432-2.263-1.306-1.756 1.815c-.387-.13-.785-.237-1.192-.318l-.614-2.452h-2.612l-.614 2.452c-.407.081-.805.188-1.192.319l-1.757-1.816-2.262 1.306.695 2.433c-.309.271-.599.562-.871.87l-2.432-.695-1.306 2.262 1.815 1.757c-.13.387-.237.785-.318 1.192l-2.452.614v2.612l2.452.614c.082.407.188.805.318 1.192l-1.815 1.756 1.306 2.263 2.432-.695c.272.308.562.599.871.871l-.695 2.432 2.263 1.306 1.756-1.816c.387.131.785.237 1.192.319l.614 2.452h2.612l.614-2.452c.407-.082.805-.188 1.192-.319l1.756 1.816 2.263-1.306-.695-2.432c.309-.272.599-.563.871-.871l2.432.695 1.306-2.263-1.815-1.756c.131-.387.237-.785.318-1.192l2.452-.614zm-12 2.694c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
      </svg>
    </div>
  );
}

export default Loader;
