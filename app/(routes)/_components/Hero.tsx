"use client";
import React from "react";
import { APIURL, SliderItem } from "@/constans";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

interface HeroProps {
  slider: SliderItem[];
}

const Hero = ({ slider }: HeroProps) => {
  return (
    <div className=" flex">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {slider.map((slide, index) => (
            <CarouselItem key={index}>
              <Image
                alt={slide.title}
                src={`${APIURL}/assets/${slide.image}`}
                width={1170}
                height={500}
                className=" w-full "
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
      </Carousel>
    </div>
  );
};

export default Hero;
