import React from "react";
import { getSlider } from "@/actions/getSlider";
import { SliderItem } from "@/constans";
import Hero from "../_components/Hero";

export default async function Home() {
  const slider: SliderItem[] = await getSlider();

  return (
    <div>
      <Hero slider={slider} />
    </div>
  );
}
