"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import { Line } from "./Line";

const Data = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    content:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    title: "Is Frontend Mentor free?",
    content:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    content:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    content:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export const Accordion = () => {
  const [indexopen, setIndexOpen] = useState<number>(99999);

  const handleClick = (index: number) => {
    setIndexOpen(index === indexopen ? 9999 : index);
  };

  const itemsOndData = Object.keys(Data).length;

  return (
    <section className="flex w-full max-w-[375px] flex-col items-center rounded-lg bg-white p-6 shadow-xl lg:max-w-[600px] lg:p-10">
      <div className="flex w-full items-center justify-start gap-[24px] pb-6 lg:pb-0">
        <Image
          alt=""
          src="/icon-star.svg"
          width={0}
          height={0}
          className="h-8 w-8"
          unoptimized
        />
        <h1 className="text-darkPurple text-[32px] font-bold lg:text-[56px]">
          FAQs
        </h1>
      </div>
      {Data.map((item, index) => (
        <>
          <AccordionItem
            key={item.title}
            open={index === indexopen}
            title={item.title}
            onClick={() => handleClick(index)}
          >
            {item.content}
          </AccordionItem>
          {itemsOndData - index < 2 ? null : <Line />}
        </>
      ))}
    </section>
  );
};
