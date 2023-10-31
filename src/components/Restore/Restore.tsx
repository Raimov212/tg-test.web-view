import React, { useEffect } from "react";
import { Data, DataType } from "../../data/data";
import RestoreList from "./RestoreList";
import { restoreList } from "../../redux/restoreRedux/restoreSlice";
import { useAppDispatch, useAppSelector } from "../../hook/redux";

const Restore = () => {
  const dispatch = useAppDispatch();
  const restoreData = useAppSelector((state) => state.restore.restoreList[0]);

  const newRestoreData = restoreData as unknown as DataType[];
  const newData = Data as unknown as DataType[];

  useEffect(() => {
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return dispatch(restoreList(newData as any));
    }, 1000);
  });

  return (
    <div className="w-screen h-screen overflow-y-scroll">
      <div className="grid grid-cols-2 w-96">
        {newRestoreData?.map((item) => (
          <React.Fragment key={item.id}>
            <RestoreList item={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Restore;
