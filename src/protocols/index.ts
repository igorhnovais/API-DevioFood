export type ApplicationError = {
  name: string;
  message: string;
  status: number;
};

export type order = {
  productId: number;
  nameCustumer: string;
  observation: string;
  transshipment: number;
  total: number;
  drop: boolean;
  description: string;
  aditional: string;
  quantity: number;
};
