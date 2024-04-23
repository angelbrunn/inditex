export type ImageType = {
  label: string;
  attributes?: any;
};

export type ItemInfoType = {
  id: string;
  name: string;
  title: string;
  author: string;
  images: ImageType[];
};

export type CardType = {
  info: ItemInfoType;
};
