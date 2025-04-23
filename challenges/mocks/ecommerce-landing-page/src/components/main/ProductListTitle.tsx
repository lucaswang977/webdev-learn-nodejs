type ProductListTitleProps = {
  title: string;
};

const ProductListTitle = ({ title }: ProductListTitleProps) => {
  return (
    <p className="border-b-cultured mb-8 border-b-[1px] py-2 text-base font-semibold">
      {title}
    </p>
  );
};

export default ProductListTitle;
