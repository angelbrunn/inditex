import Image from "next/image"
import H2 from '@/components/Atoms/H2';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  text-decoration: none;
  min-height: 150px;
  max-width: 250px;
  margin-bottom: 20px;
  transition: ease-in-out all 0.5s;

  &:hover {
    box-shadow: 0 2px 10px #3675a7;

    div > img {
      border: solid #3675a7 10px;
      border-radius: 50%;
    }
  }
`;

export const CardImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -70px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled(H2)`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const CardSubtitle = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: #666666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: solid #3675a7 0px;
  transition: ease-in-out all 0.5s;
`;
