import React from "react";
import styled, { css } from "styled-components";

interface CardProps {
  theme?: "dark" | "light";
  title: string;
  description: string;
  name: string;
  date: string;
  rating: number;
}

const CardContainer = styled.div<{ theme: "dark" | "light" }>`
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  max-width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => (theme === "dark" ? "#000" : "#fff")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  position: relative;
  text-align: left;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1d4ed8; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const UserName = styled.h2`
  font-size: 1rem;
  margin-left: 10px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: bold;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  margin-bottom: 12px;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Star = styled.span<{ filled: boolean }>`
  color: ${({ filled }) => (filled ? "#FFA500" : "#ddd")};
  font-size: 1.2rem;
  margin-right: 4px;
`;

const DateWrapper = styled.div`
  font-size: 0.75rem;
`;

const Card: React.FC<CardProps> = ({
  theme = "light",
  title,
  description,
  name,
  date,
  rating,
}): JSX.Element => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<Star key={i} filled={i < rating}>★</Star>);
    }
    return stars;
  };

  return (
    <CardContainer theme={theme}>
      <Header>
        <ProfileImage>{name.charAt(0)}</ProfileImage>
        <UserName>{name}</UserName>
      </Header>
      <RatingWrapper>{renderStars()}</RatingWrapper>
      <CardDescription>{description}</CardDescription>
      <DateWrapper>{date}</DateWrapper>
    </CardContainer>
  );
};

export default Card;
