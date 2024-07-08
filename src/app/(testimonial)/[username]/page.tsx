'use client';

import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import { useParams, useSearchParams } from "next/navigation";
import styled, { keyframes } from "styled-components";
import axios from "axios";

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

interface TestimonialData {
  review_description: string;
  reviewer_username: string;
  date: string;
  rating: number;
}

const Testimonial: React.FC = (): JSX.Element => {
    const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const searchParams = useSearchParams();
    const params = useParams();
    const theme = searchParams.get('theme') === 'dark' ? 'dark' : 'light';

    const developerUsername = params?.username;

    useEffect(() => {
        if (developerUsername) {
            const fetchTestimonials = async () => {
                try {
                    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/reviews/${developerUsername}`);
                    setTestimonials(response.data);
                    setLoading(false);
                } catch (error) {
                    setError("Failed to fetch testimonials");
                    setLoading(false);
                }
            };
            fetchTestimonials();
        }
    }, [developerUsername]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const scrollDuration = testimonials.length * 5;
    const cardsToDisplay = [...testimonials, ...testimonials]; 

    return (
        <CarouselContainer>
            <CardWrapper duration={scrollDuration}>
                {cardsToDisplay.map((testimonial, index) => (
                    <Card
                        key={index}
                        theme={theme}
                        description={testimonial.review_description}
                        name={testimonial.reviewer_username}
                        date={testimonial.date}
                        rating={testimonial.rating}
                    />
                ))}
            </CardWrapper>
        </CarouselContainer>
    );
};

export default Testimonial;
