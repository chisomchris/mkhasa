import { Icon } from "@iconify/react";
import { Star } from "lucide-react";

const Review = ({
  review,
  reviewer,
  rating,
}: {
  review: string;
  reviewer: string;
  rating: number;
}) => {
  return (
    <div>
      <Rating rating={rating} />
      <h2 className="font-bold">{reviewer}</h2>
      <p>{review}</p>
    </div>
  );
};

export const Rating = ({ rating = 0, onClick = () => {} }) => {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<Icon icon="iconamoon:star-fill" fontSize={18} />);
  }
  for (let i = 0; i < 5 - rating; i++) {
    stars.push(<Star size={18} />);
  }

  return (
    <div className="flex gap-[1px] py-1 text-destructive">
      {stars.map((icon, i) => (
        <button key={i} /*onClick={() => onClick(i + 1)}*/>{icon}</button>
      ))}
    </div>
  );
};
