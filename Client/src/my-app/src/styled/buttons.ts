// @ts-nocheck
import styled from "./style";
export const BasicButton = styled.button`
  padding: 0 16px;
  margin: 4px;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.fontColor};
  background-color: ${(props: any) => props.theme.color.placeholderBackground};

  cursor: pointer;
  user-select: none;

  outline: none;
  // @ts-ignore
  border-radius: ${({ theme }) => theme.borderRadiuses.round}px;
  border: transparent;

  // @ts-ignore
  transition: ${({ theme }) => `opacity 0.6s ${theme.easing.easeOut}`};

  &:disabled {
    // @ts-ignore
    opacity: ${({ theme }) => theme.opacity.disabled};
    pointer-events: none;
    cursor: default;
  }

  * {
    pointer-events: none;
  }
`;

export const SelectButton = styled(BasicButton)`
  cursor: pointer;
  user-select: none;
  outline: none;
  color: ${(props) => props.theme.color.placeholderBackground};
  background-color: ${(props) => props.theme.color.defaultBtn};

  transition: ${({ theme }) => `background-color 0.6s ${theme.easing.easeOut}`};
`;
