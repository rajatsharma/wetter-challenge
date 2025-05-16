import React from "react";
import Image from "next/image";

// We can achieve 0 CLS by setting dimensions for this image since it is the only async content
// To improve LCP we set fetchPriority to high since it is a critical resource, also setting priority will
// enable `preload` for the image and disable lazy loading
// Setting the sizes prop will tell Next.js to create varying srcSets which will help us to load different
// image size for different device width.
export const SomeImage: React.FC = () => {
  return (
    <div>
      <Image
        src="https://cs3.wettercomassets.com/images/interview/hafen.jpg"
        alt="hafen"
        width={500}
        height={333}
        sizes="(max-width:500px) 350px, (min-width: 500px) 450px"
        fetchPriority="high"
        priority
      />
      <div>
        Description:
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
};
