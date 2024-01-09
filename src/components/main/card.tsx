type PropTypes = {
  title: string;
  num: number | string;
};

const Card = ({ title, num }: PropTypes) => {
  return (
    <div className="flex-1 p-4 bg-white rounded-lg shadow-md flex flex-col gap-1">
      <h6 className="font-light text-sm">{title}</h6>
      <h4 className="text-3xl font-semibold">{num}</h4>
    </div>
  );
};

export default Card;
