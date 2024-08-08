import { Container } from '@/styles/layout/BackDropStyle';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

const BackDrop = ({ children, isOpen }: Props) => {
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

  return createPortal(<Container>{children ?? null}</Container>, document.body);
};

export default BackDrop;
