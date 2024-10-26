
const BUTTON_STYLES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${BUTTON_STYLES_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  )
}