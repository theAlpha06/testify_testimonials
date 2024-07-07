'use client';

import React from "react";
import Card from "@/components/Card";
import { useSearchParams } from "next/navigation";
import cardData from "@/cardData";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); } 
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div<{ duration: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${scroll} ${({ duration }) => duration}s linear infinite;
`;

const Testimonial: React.FC = (): JSX.Element => {
    const searchParams = useSearchParams();
    const theme = searchParams.get('theme') === 'dark' ? 'dark' : 'light';

    const scrollDuration = cardData.length * 5; 

    const cardsToDisplay = [...cardData, ...cardData]; 

    return (
        <CarouselContainer>
            <CardWrapper duration={scrollDuration}>
                {cardsToDisplay.map((card, index) => (
                    <Card
                        key={index}
                        theme={theme}
                        title={card.title}
                        description={card.description}
                        name={card.name}
                        date={card.date}
                        rating={card.rating}
                    />
                ))}
            </CardWrapper>
        </CarouselContainer>
    );
};

export default Testimonial;