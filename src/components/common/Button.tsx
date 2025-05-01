import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon,
  as = 'button',
  href,
  download,
  target,
  rel,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-500',
    outline: 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  };
  
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const commonProps = {
    className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`,
    onClick,
    disabled,
  };

  if (as === 'a') {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        {...commonProps}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      {...commonProps}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;