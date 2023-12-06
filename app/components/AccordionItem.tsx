import Image from "next/image";
import useSound from "use-sound";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClick: () => void;
};

export const AccordionItem = ({
  title,
  children,
  onClick,
  open = false,
}: Props) => {
  const [playActive] = useSound("/switchon.mp3");
  const [playInactive] = useSound("/switchoff.mp3");

  return (
    <article className="w-full select-none">
      <div
        onClick={onClick}
        onMouseUp={() => playInactive()}
        onMouseDown={() => playActive()}
        className="flex cursor-pointer items-center justify-between gap-[24px] "
      >
        <h4 className="text-darkPurple font-semibold lg:text-lg">{title}</h4>
        {open ? (
          <Image
            alt=""
            src="/icon-minus.svg"
            width={0}
            height={0}
            className="h-[30px] w-[30px] "
          />
        ) : (
          <Image
            src="/icon-plus.svg"
            alt=""
            width={0}
            height={0}
            className="h-[30px] w-[30px] "
          />
        )}
      </div>
      {open && (
        <p className="text-palePurple pt-6 text-sm font-normal leading-[21px]">
          {children}
        </p>
      )}
    </article>
  );
};
