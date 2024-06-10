export const List = () => {
  return (
    <ul className="grid grid-cols-2 gap-4 py-4">
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </ul>
  );
};

export const Card = () => {
  return <div className="aspect-[4/5] bg-card rounded-lg animate-pulse"></div>;
};
