import styled from "styled-components";
import { InnerDiv, ComponentDiv } from "./Common.styles";

export const Container = styled(InnerDiv)`
  position: relative;
  justify-content: center;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 70%;
  top: 0;
  position: absolute;
  z-index: -1;
`;

export const Main = styled(ComponentDiv)`
  height: 100%;
`;

export const Header = styled.div`
  font-size: 200%;
  font-weight: 800;
  color: white;
  height: 10%;
  max-height: 70px;
  align-items: center;
  display: flex;
`;

export const Body = styled.div`
  flex-direction: row;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
`;
export const SectionLeft = styled.div`
  display: flex;
  align-items: center;
  width: 33%;
`;
export const QRImage = styled.img`
  width: 50%;
  min-width: 100px;
  border-radius: 10%;
`;
export const PhoneImage = styled.img`
  width: 80%;
`;
export const PlayStoreImage = styled.img`
  width: 50%;
  min-width: 100px;
  margin-bottom: 10%;
`;

export const WatchImage = styled.img`
  width: 100%;
  transform: rotate(30deg);
`;
export const SectionMiddle = styled.div`
  display: flex;
  align-items: center;
  width: 33%;
  flex-direction: column;
  justify-content: center;
`;
export const SectionRight = styled.div`
  width: 33%;
`;
export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40%;
`;
export const DownloadBox = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 100%;
`;
export const MarginBox = styled.div<{ margin: string }>`
  height: ${(props) => props.margin};
`;
export const LogoText = styled.span`
  color: white;
  font-size: 400%;
  font-weight: 800;
`;
export const InfoText = styled.span`
  color: white;
  font-size: 200%;
  font-weight: 700;
`;