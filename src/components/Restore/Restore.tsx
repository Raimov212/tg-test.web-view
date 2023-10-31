import React, { useEffect } from "react";
import { Data } from "../../data/data";
import RestoreList from "./RestoreList";
import { restoreList } from "../../redux/restoreRedux/restoreSlice";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { restoreListType } from "../../redux/restoreRedux/restoreSliceType";

const Restore = () => {
  const dispatch = useAppDispatch();
  const restoreData = useAppSelector((state) => state.restore.restoreList);

  useEffect(() => {
    setTimeout(() => {
      return dispatch(restoreList(Data));
    }, 1000);
  }, []);

  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <div className="grid grid-cols-2 w-96">
        {restoreData[0]?.map((item: restoreListType) => (
          <React.Fragment key={item.id}>
            <RestoreList item={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Restore;
