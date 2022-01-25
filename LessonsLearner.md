1. [ ADDING_MULTIPLE_CLASSES ]:

const cx = (...styles) => styles.join("");

return (

<div className={cx(styles.menuBtn, styles.open)}/>
)

2. Environment variables
   With vercel you must first add the env variables
   then add the commitment on Git for the variable to take effect
