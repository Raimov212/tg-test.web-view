import { Link } from "react-router-dom";
import RestoreImg from "../../assets/restore.jpg";
import { memo } from "react";

interface RestoreDataType {
  id: string;
  restoreName?: string;
}

const RestoreList = memo(({ item }: { item: RestoreDataType }) => {
  return (
    <Link
      to={`/food/${item.id}`}
      className="p-4 cursor-pointer group hover:scale-105 transition-all ease-in-out checked:scale-105"
    >
      <img
        src={RestoreImg}
        alt="food"
        className="object-cover rounded-lg h-36"
      />
      <p className="text-white text-center group-hover:text-blue-400">
        {item.restoreName}
      </p>
    </Link>
  );
});

export default RestoreList;
