import { Container } from '@/styles/layout/BackDropStyle';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onBackdropClick?: () => void;
};

const BackDrop = ({ children, isOpen, onBackdropClick }: Props) => {
  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'auto';
    }

    return () => {
      window.document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return isOpen
    ? createPortal(
        <Container onClick={onBackdropClick}>{children ?? null}</Container>,
        document.body,
      )
    : null;
};

export default BackDrop;
