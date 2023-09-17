import { FC, memo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./StarRaiting.module.scss";
import { Icon as IconDeprecated } from "../Icon/Icon";
import StarIcon from "@/shared/assets/icons/star.svg";
import { ToggleFeatures, toggleFeatures } from "@/shared/lib/features";
import { Icon } from "../../redesigned/Icon";

interface StarRaitingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRaiting: FC<StarRaitingProps> = memo((props: StarRaitingProps) => {
  const { className, size = 30, selectedStars = 0, onSelect } = props;
  const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarCount(0);
    }
  };
  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div
      className={classNames(
        toggleFeatures({
          name: "isAppRedesigned",
          on: () => cls.ratingRedesigned,
          off: () => cls.ratingDeprecated,
        }),
        {},
        [className],
      )}
    >
      {stars.map((starNumber) => {
        const commonProps = {
          Svg: StarIcon,
          className: classNames(cls.starIcon, { [cls.isSelected]: isSelected }, [
            currentStarCount >= starNumber ? cls.hovered : cls.normal,
          ]),
          width: size,
          height: size,
          onMouseLeave: onLeave,
          onMouseEnter: onHover(starNumber),
          onClick: onClick(starNumber),
          "data-testid": `StarRating.${starNumber}`,
          "data-selected": currentStarCount >= starNumber,
        };

        return (
          <ToggleFeatures
            key={starNumber}
            feature="isAppRedesigned"
            on={<Icon clickable={!isSelected} key={starNumber} {...commonProps} />}
            off={<IconDeprecated key={starNumber} {...commonProps} />}
          />
        );
      })}
    </div>
  );
});
