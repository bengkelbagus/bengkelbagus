import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import Glide from "@glidejs/glide";
import { useEffect, useState } from "react";
import useWindowSize from "@/Hooks/UseWindowSize";

const ArrowGlider = styled.button`
  color: #fff;
  border-radius: 100px;
  background-color: #28babf;
  border: 1px solid #eee;
  padding: 0;
  font-weight: 700;
`;

const CarouselContainer = styled.div`
  border-right: 1px solid #fefefe;
  ${(props) => props.css}
`;

const CarouselWrapper = styled.ul`
  grid-gap: 1rem;
  justify-content: space-around;
`;

const GlideSlide = styled.li`
  margin-left: 0 !important;
  margin-right: 0 !important;
`;

const Bullets = styled.div`
  bottom: ${(props) => (props.bulletPosition ? props.bulletPosition : "-2rem")};
`;

const BulletsButton = styled.div`
  background-color: #ccc;

  &.glide__bullet--active,
  &:focus {
    background-color: #28babf;
    border: 2px solid #28babf;
  }
`;

export const CarouselItem = ({ children }) => (
  <GlideSlide className="glide__slide">{children}</GlideSlide>
);

export const GliderCarousel = ({
  maxCarousel,
  css,
  children,
  autoplay,
  isBullet,
  isArrow,
  isDisabled,
  isFocusCenter,
  bulletPosition,
  isCarousel,
  id,
}) => {
  const { isLaptopDisplay, isTabletDisplay, isMobileDisplay } = useWindowSize();
  const [maxItem, setMaxItem] = useState(0);
  const carouselLength = children.length || 1;
  const [currIndex, setCurrIndex] = useState(0);
  const idSelector = id ? "glide__" + id : "glide";

  useEffect(() => {
    if (isMobileDisplay) setMaxItem(1);
    else if (isTabletDisplay && maxCarousel > 2) setMaxItem(2);
    else if (isLaptopDisplay && maxCarousel > 3) setMaxItem(3);
    else if (maxCarousel) setMaxItem(maxCarousel);
    else setMaxItem(3);

    const options = {
      type: isCarousel ? "carousel" : "slider",
      perView: maxItem || 3,
      perTouch: maxItem || 3,
      gap: 40,
      rewind: autoplay ? true : false,
      bound: true,
      hoverpause: false,
      autoplay: autoplay ? 5000 : false,
      focusAt: isFocusCenter ? "center" : 0,
    };
    let glide;
    if (maxItem !== 0) {
      glide = new Glide("." + idSelector, options).mount();
      if (isDisabled && !isTabletDisplay) glide.disable();
    }

    return () => {
      if (glide) glide.destroy();
    };
  }, [
    idSelector,
    isCarousel,
    carouselLength,
    isDisabled,
    isFocusCenter,
    maxCarousel,
    maxItem,
    isLaptopDisplay,
    isTabletDisplay,
    isMobileDisplay,
    autoplay,
  ]);

  if (!children || !carouselLength || carouselLength === 0 || maxItem === 0)
    return null;

  return (
    <CarouselContainer className={idSelector} css={css}>
      <div className="glide__track" data-glide-el="track">
        <CarouselWrapper className="glide__slides">{children}</CarouselWrapper>
      </div>
      {maxItem <= carouselLength && !isTabletDisplay && isArrow && (
        <div
          className="glide__arrows"
          data-glide-el="controls"
          style={{
            transition: "opacity 0.2s",
          }}
        >
          <ArrowGlider
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
            onClick={() =>
              setCurrIndex((prev) => (prev === 0 ? prev : prev - 1))
            }
            style={{
              opacity: currIndex === 0 ? "0" : "1",
              pointerEvents: currIndex === 0 ? "none" : "",
              cursor: currIndex === 0 ? "normal" : "pointer",
            }}
          >
            <ChevronLeftIcon m={4} />
          </ArrowGlider>
          <ArrowGlider
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
            onClick={() =>
              setCurrIndex((prev) =>
                prev >= carouselLength - maxItem ? prev : prev + 1
              )
            }
            style={{
              opacity: currIndex >= carouselLength - maxItem ? "0" : "1",
              pointerEvents:
                currIndex >= carouselLength - maxItem ? "none" : "",
              cursor:
                currIndex >= carouselLength - maxItem ? "normal" : "pointer",
            }}
          >
            <ChevronRightIcon m={4} />
          </ArrowGlider>
        </div>
      )}
      {isBullet && (
        <Bullets
          className="glide__bullets"
          data-glide-el="controls[nav]"
          bulletPosition={bulletPosition}
        >
          {new Array(carouselLength).fill(null).map((_, index) => (
            <BulletsButton
              className="glide__bullet"
              data-glide-dir={`=${index}`}
              key={index}
            ></BulletsButton>
          ))}
        </Bullets>
      )}
    </CarouselContainer>
  );
};
