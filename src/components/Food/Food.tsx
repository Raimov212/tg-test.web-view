import React, { useEffect, useState } from "react";
import FoodList from "./FoodList";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hook/redux";
import FoodImg from "../../assets/food.jpg";
import {
  foodListType,
  restoreListType,
} from "../../redux/restoreRedux/restoreSliceType";

const Food = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { id } = useParams();
  const restoreData: restoreListType[] = useAppSelector(
    (state) => state.restore.restoreList
  );
  const foodListStore: foodListType[] = useAppSelector(
    (state) => state.restore.foodList
  );

  console.log("foodListStore", foodListStore);

  function AllPrice(data: foodListType) {
    const allPrice: number = data.reduce(
      (acc: number, item: foodListType) => acc + item.price * item.quantity,
      0
    );
    return allPrice;
  }

  useEffect(() => {
    AllPrice(foodListStore);
  }, [foodListStore]);

  return (
    <div className="w-screen h-screen overflow-y-scroll flex flex-col items-center p-4">
      <button
        className="text-white border-2 border-red-500 px-4 rounded-lg"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        store({foodListStore.length})
      </button>
      <div className="text-white">
        Total : {AllPrice(foodListStore)}.000 so'm
      </div>
      {isVisible && (
        <div className="w-[400px] h-[500px] fixed top-20 right-4 overflow-hidden">
          <div className="bg-black opacity-90 top-0 right-0 w-full h-full"></div>
          <div className="h-full absolute top-0 ml-[15%] py-4 px-4 overflow-y-auto">
            {foodListStore?.map((item) => (
              <div
                className="flex flex-col items-center relative mb-4"
                key={item.id}
              >
                <div
                  className="text-white absolute top-[-10px] right-[-10px] w-8 h-8 rounded-full 
                 bg-yellow-600 flex items-center justify-center"
                >
                  {item.quantity}
                </div>
                <img
                  src={FoodImg}
                  alt="food"
                  className="object-cover rounded-lg h-36 "
                />
                <div className="flex gap-10 mt-2">
                  <div className="text-white">{item.foodName}</div>
                  <div className="text-white">{item.price}.000 so'm</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="grid grid-cols-2 w-96">
        {restoreData[0].map(
          (item: { id: string | undefined; data: foodListType[] }) =>
            item.id === id &&
            item.data?.map((item) => (
              <React.Fragment key={item.id}>
                <FoodList item={item} />
              </React.Fragment>
            ))
        )}
      </div>
    </div>
  );
};

export default Food;
