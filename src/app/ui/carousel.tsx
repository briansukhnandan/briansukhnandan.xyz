"use client";

import { useCallback, useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export const ImageCarousel = ({ images }: { images: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (images.length === 0) {
    return null;
  }

  return (
    <Box position="relative" role="region" aria-label="Photo carousel">
      <Box overflow="hidden" ref={emblaRef}>
        <Box display="flex" sx={{ touchAction: "pan-y pinch-zoom" }}>
          {images.map((image, index) => (
            <Box flex="0 0 100%" key={image} minW={0}>
              <Image
                alt={`Carousel image ${index + 1}`}
                src={image}
                height="275px"
                width="100%"
                objectFit="contain"
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        as="button"
        aria-label="Previous image"
        onClick={() => emblaApi?.scrollPrev()}
        position="absolute"
        top="50%"
        left={2}
        transform="translateY(-50%)"
        borderRadius="full"
        bg="blackAlpha.600"
        color="white"
        px={2}
        py={1}
      >
        ‹
      </Box>
      <Box
        as="button"
        aria-label="Next image"
        onClick={() => emblaApi?.scrollNext()}
        position="absolute"
        top="50%"
        right={2}
        transform="translateY(-50%)"
        borderRadius="full"
        bg="blackAlpha.600"
        color="white"
        px={2}
        py={1}
      >
        ›
      </Box>

      <Box display="flex" justifyContent="center" gap={2} mt={2}>
        {images.map((image, index) => (
          <Box
            as="button"
            aria-label={`Go to image ${index + 1}`}
            aria-current={index === selectedIndex ? "true" : undefined}
            bg={index === selectedIndex ? "white" : "whiteAlpha.500"}
            borderRadius="full"
            height={2}
            key={image}
            onClick={() => emblaApi?.scrollTo(index)}
            width={2}
          />
        ))}
      </Box>
    </Box>
  );
};
