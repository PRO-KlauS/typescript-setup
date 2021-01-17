import React, { ReactNode, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { ButtonVariant } from 'react-bootstrap/esm/types';
import Button from './button';

export interface ModalButton {
  isDisabled?: boolean;
  isLoading?: boolean;
  label?: string;
  className?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
}

interface ModalProps {
  children: ReactNode;
  title: string;
  isModalVisible: boolean;
  toggleModal: () => void;
  buttons: ModalButton[];
  modalClass?: string;
}

const CustomModal: React.FC<ModalProps> = ({
  children,
  title,
  isModalVisible,
  toggleModal,
  buttons,
  modalClass,
}) => {
  const toggleClass = () => {
    document.documentElement.classList.toggle('modal-visible');
  };
  useEffect(() => {
    toggleClass();
    return toggleClass;
  }, []);
  return (
    <Modal
      centered
      className={modalClass}
      show={isModalVisible}
      onHide={toggleModal}
      container={document.getElementById('root')}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {buttons &&
          buttons.map((btn) => {
            return (
              <Button
                disabled={btn.isDisabled}
                isLoading={btn.isLoading}
                label={btn.label}
                onClick={btn.onClick}
                className={btn.className}
                variant={btn.variant || 'primary'}
              />
            );
          })}
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
