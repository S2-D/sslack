import React, { CSSProperties, FC, useCallback } from 'react';

import { CreateMenu, CloseModalButton } from '@components/Menu/styles';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  style: CSSProperties;
  closeButton?: boolean;
}
const Menu: FC<Props> = ({ children, closeButton, style, show, onCloseModal }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);
  //부모 태그로 이벤트 버블링이 안됨. 메뉴 밖을 누르면 모달 창이 닫힘
  if (!show) {
    return null;
  }
  return (
    <CreateMenu onClick={onCloseModal}>
      <div onClick={stopPropagation} style={style}>
        {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
        {children}
      </div>
    </CreateMenu>
  );
};

Menu.defaultProps = {
  closeButton: true,
};

export default Menu;
