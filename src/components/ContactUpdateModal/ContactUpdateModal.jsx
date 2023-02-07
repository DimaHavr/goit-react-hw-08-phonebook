import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import ContactUpdate from '../ContactUpdate';
import { Overlay, ModalBox } from './ContactUpdateModal.styled';
const modalRoot = document.querySelector('#modal-root');

export default function ContactUpdateModal({
  onToggleModal,
  selectedName,
  selectedNumber,
  selectedId,
}) {
  const onBackdropCloseModal = event => {
    if (event.target === event.currentTarget) {
      onToggleModal();
    }
  };

  useEffect(() => {
    const onCloseModal = event => {
      if (event.code === 'Escape') {
        onToggleModal();
      }
    };

    window.addEventListener('keydown', onCloseModal);

    return () => {
      window.removeEventListener('keydown', onCloseModal);
    };
  }, [onToggleModal]);

  return createPortal(
    <Overlay onClick={onBackdropCloseModal}>
      <ModalBox>
        <ContactUpdate
          onToggleModal={onToggleModal}
          selectedName={selectedName}
          selectedNumber={selectedNumber}
          selectedId={selectedId}
        />
      </ModalBox>
    </Overlay>,
    modalRoot
  );
}
