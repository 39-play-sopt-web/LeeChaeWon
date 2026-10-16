const Button = ({
  children,
  onClick,
  type="button",
  variant="primary",
  disabled=false,
  className='',
}) => {

  const baseStyles =
    'rounded-lg px-4 py-2 text-body-01 transition-colors disabled:cursor-not-allowed disabled:opacity-50'

  const variantStyles = {
    primary: 'bg-primary text-text-primary hover:opacity-80',
    secondary: 'border border-border text-text-primary hover:bg-secondary',
    danger: 'border border-danger text-danger hover:bg-danger-hover'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
    {children}
    </button>
  );
};

export default Button;