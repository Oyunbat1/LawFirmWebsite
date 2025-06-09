import { ListItemsProps } from "@/app/constants/type";
export const ListItems: ListItemsProps[] = [
  {
    id: 1,
    name: "Үйлчилгээ",
    items: [
      { id: 1, name: "hello" },
      { id: 2, name: "bye" },
    ],
    navigation: "/service",
  },
  {
    id: 2,
    name: "Бидний тухай",
    items: [],
    navigation: "/components/mainPages/employees",
  },
  {
    id: 4,
    name: "Холбоо барих",
    items: [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
    ],
    navigation: "/components/mainPages/footer",
  },
];
