interface RestoreDataType {
  id: string;
  price: number;
  foodName: string;
  quantity: number;
}

interface DataType {
  id: string;
  restoreName: string;
  data: RestoreDataType[];
}

export const Data: DataType[] = [
  {
    id: "1",
    restoreName: "Restore_1",
    data: [
      {
        id: "11",
        price: 10,
        foodName: "Hamburger1",
        quantity: 0,
      },
      {
        id: "12",
        price: 14,
        foodName: "Lavash1",
        quantity: 0,
      },
      {
        id: "13",
        price: 20,
        foodName: "Donar1",
        quantity: 0,
      },
      {
        id: "14",
        price: 40,
        foodName: "Hot Dog",
        quantity: 0,
      },
    ],
  },
  {
    id: "2",
    restoreName: "Restore_2",
    data: [
      {
        id: "21",
        price: 20,
        foodName: "Hamburger2",
        quantity: 0,
      },
      {
        id: "22",
        price: 60,
        foodName: "Lavash2",
        quantity: 0,
      },
      {
        id: "23",
        price: 45,
        foodName: "Donar2",
        quantity: 0,
      },
      {
        id: "24",
        price: 40,
        foodName: "Hot Dog",
        quantity: 0,
      },
    ],
  },
  {
    id: "3",
    restoreName: "Restore_3",
    data: [
      {
        id: "31",
        price: 60,
        foodName: "Hamburger3",
        quantity: 0,
      },
      {
        id: "32",
        price: 10,
        foodName: "Lavash3",
        quantity: 0,
      },
      {
        id: "33",
        price: 70,
        foodName: "Donar3",
        quantity: 0,
      },
      {
        id: "34",
        price: 40,
        foodName: "Hot Dog",
        quantity: 0,
      },
    ],
  },
  {
    id: "4",
    restoreName: "Restore_4",
    data: [
      {
        id: "41",
        price: 10,
        foodName: "Hamburger4",
        quantity: 0,
      },
      {
        id: "42",
        price: 80,
        foodName: "Lavash4",
        quantity: 0,
      },
      {
        id: "43",
        price: 10,
        foodName: "Donar4",
        quantity: 0,
      },
      {
        id: "44",
        price: 40,
        foodName: "Hot Dog",
        quantity: 0,
      },
    ],
  },
];
