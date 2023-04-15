import TypeProducts from "../models/products";

export const getByCategory = (
  data: TypeProducts.Datum[],
  categories: string[]
) => {
  let filtered: TypeProducts.Datum[] = data;
  categories.forEach((el) => {
    filtered = [
      ...filtered.filter((element) =>
        element.categories.find((cat) => cat.slug === el)
      ),
    ];
  });
  return filtered;
};
