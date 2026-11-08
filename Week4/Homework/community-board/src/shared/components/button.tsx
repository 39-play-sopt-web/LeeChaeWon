import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  children: ReactNode;
}

const variantStyle = {
  primary: 'bg-primary text-text-primary hover:bg-primary-hover',
  secondary:
    'border border-border bg-secondary text-text-primary hover:bg-secondary-hover',
};

const Button = ({
  children,
  variant = 'primary',
  fullWidth = true,
  className = '',
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      className={`rounded-lg px-4 py-3 text-body-02 transition-colors duration-200 ${
        fullWidth ? 'w-full' : ''
      } ${variantStyle[variant]} ${
        buttonProps.disabled ? 'cursor-not-allowed opacity-50' : ''
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;