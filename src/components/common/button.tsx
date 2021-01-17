import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { ButtonVariant } from 'react-bootstrap/esm/types';

interface ButtonProps {
  label?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: ButtonVariant;
  iconClass?: string;
  prependIcon?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  label,
  disabled,
  isLoading,
  onClick,
  className,
  type,
  variant,
  iconClass,
  prependIcon,
}) => {
  return (
    <Button
      variant={variant || 'primary'}
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}>
      {isLoading ? (
        <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="sr-only">Loading...</span>
        </>
      ) : (
        <>
          {prependIcon && <i className={iconClass} />}
          {label}
          {!prependIcon && <i className={iconClass} />}
        </>
      )}
    </Button>
  );
};

export default CustomButton;
