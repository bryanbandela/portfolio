1. [ ADDING_MULTIPLE_CLASSES ]:

const cx = (...styles) => styles.join("");

return (
<div className={cx(styles.menuBtn, styles.open)}/>
)
