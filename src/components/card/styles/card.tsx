import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: colum;
  margin-bottom: 50px;
  box-sizing: border-box;
`;

export const Title = styled.p``;

interface GroupProps {
  margin?: any;
  flexDirection?: any;
  alignItems?: any;
}
export const Group = styled.div<GroupProps>``;

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Entities = styled.div``;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;

export const Item = styled.div``;

export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;

export const Content = styled.div``;

export const Maturity = styled.div<{ rating: any }>``;

export const Feature = styled.div<{ src: any }>``;

export const FeatureTitle = styled(Title)``;

export const FeatureClose = styled.button``;

export const FeatureText = styled.p<{ fontWeight?: any }>``;
