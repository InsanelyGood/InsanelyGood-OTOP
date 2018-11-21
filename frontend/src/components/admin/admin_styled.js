import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
`;
export const TH = styled.th`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 8px;
  font-size: 18px;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;
export const TR = styled.tr`
  &:hover {
    box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.5);
    font-weight: bold;
    cursor: pointer;
  }
`;
export const TD = styled.td`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;
export const TDLeft = styled.td`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 8px;
`;
