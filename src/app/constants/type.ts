export type ListProps = {
  isMenuOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  items: ListItemsProps;
};

export type ListItemsProps = {
  id: number | null | undefined;
  name: String;
  items: { id: number; name: string }[];
  navigation: String;
};
