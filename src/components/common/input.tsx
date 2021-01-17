import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { ButtonVariant } from 'react-bootstrap/esm/types';
import Button from './button';

interface InputProps {
  controlId?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  showError?: string | boolean;
  inputRef?: (ref: HTMLInputElement) => void;
  name?: string;
  disabled?: boolean | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  buttonLabel?: string;
  isLoading?: boolean;
  isButtonDisabled?: boolean;
  onButtonClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  isRequired?: boolean;
  value?: string;
  isControlled?: boolean;
  iconClass?: string;
  buttonVariant?: ButtonVariant;
  hasButton?: boolean | undefined;
  buttonType?: 'button' | 'submit' | 'reset';
  prependText?: string;
  hintText?: string;
}

const Input: React.FC<InputProps> = ({
  controlId,
  label,
  type,
  placeholder,
  error,
  showError,
  inputRef,
  name,
  disabled,
  onChange,
  onBlur,
  buttonLabel,
  isLoading,
  isButtonDisabled,
  onButtonClick,
  isRequired,
  value,
  isControlled,
  iconClass,
  buttonVariant,
  hasButton,
  buttonType,
  prependText,
  hintText,
}) => {
  return (
    <Form.Group
      className={iconClass && !onButtonClick ? 'with-icon' : ''}
      controlId={controlId}>
      {label && (
        <Form.Label>
          {label}
          {isRequired && <span className="required"> *</span>}
          {hintText && <span className="input-example">{hintText}</span>}
        </Form.Label>
      )}
      <InputGroup>
        {isControlled ? (
          <Form.Control
            name={name}
            type={type}
            placeholder={placeholder}
            ref={inputRef}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        ) : (
          <Form.Control
            name={name}
            type={type}
            placeholder={placeholder}
            ref={inputRef}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
        {(buttonLabel || iconClass) && (
          <InputGroup.Append>
            {hasButton && (
              <Button
                disabled={isButtonDisabled}
                isLoading={isLoading}
                label={buttonLabel}
                onClick={onButtonClick as () => void}
                variant={buttonVariant}
                iconClass={iconClass}
                type={buttonType}
              />
            )}
            {!hasButton && iconClass && <i className={iconClass} />}
          </InputGroup.Append>
        )}
        {prependText && <span className="numbers">{prependText}</span>}
      </InputGroup>
      {showError && error && (
        <Form.Text className="error-text">{error}</Form.Text>
      )}
    </Form.Group>
  );
};

export default Input;
