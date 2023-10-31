import { useCallback, useEffect } from "react";
import FoodIMg from "../../assets/food.jpg";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { handleDecrementStoreFood } from "../../redux/restoreRedux/restoreSlice";
import { handleIncrementStoreFood } from "../../redux/restoreRedux/restoreSlice";
import { foodListType } from "../../redux/restoreRedux/restoreSliceType";
import { useTelegram } from "../../hook/useTelegram";

interface FoodDataType {
  id: string;
  foodName: string;
  price: number;
  quantity: number;
}

const FoodList = ({ item }: { item: FoodDataType }) => {
  const { tg } = useTelegram();
  const dispatch = useAppDispatch();
  const foodListStore = useAppSelector((state) => state.restore.foodList);

  const onSendData = useCallback(() => {
    tg.sendData(JSON.stringify(foodListStore));
  }, [foodListStore, tg]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData, tg]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Send Message",
    });
  }, [tg]);

  return (
    <div className=" p-4">
      <div className="">
        <img
          src={FoodIMg}
          alt="food"
          className="object-cover rounded-lg h-36"
        />
        <div className="">
          <div className="text-white">{item.foodName}</div>
          <div className="text-white">{item.price}.000 so'm</div>
        </div>
        {/* {foodListStore.length === 0 && (
          <button
            onClick={() =>
              dispatch(
                handleIncrementStoreFood(item as unknown as foodListType)
              )
            }
            className="bg-green-500 w-full rounded-lg text-white text-xl checked:bg-red-300"
          >
            ADD
          </button>
        )} */}
        {/* {foodListStore.map((foodList) =>
          foodList.id === item.id ? ( */}
        <div className="flex w-full justify-between gap-2">
          <button
            onClick={() => dispatch(handleDecrementStoreFood(item.id))}
            className="bg-red-600 w-full rounded-lg text-white text-xl"
          >
            -
          </button>
          <button
            onClick={() =>
              dispatch(
                handleIncrementStoreFood(item as unknown as foodListType)
              )
            }
            className="bg-green-500 w-full rounded-lg text-white text-xl checked:bg-red-300"
          >
            +
          </button>
        </div>
        {/* ) : (
            <button
              key={foodList.id}
              onClick={() =>
                dispatch(
                  handleIncrementStoreFood(item as unknown as foodListType)
                )
              }
              className="bg-green-500 w-full rounded-lg text-white text-xl checked:bg-red-300"
            >
              ADD
            </button>
          )
        )} */}
      </div>
    </div>
  );
};

export default FoodList;
