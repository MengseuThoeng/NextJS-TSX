import React from "react";
export type ParamProps = {
  params: {
    id: number;
  };
};

async function getDetail(id: number) {
  const productDetail = await fetch(`https://dummyjson.com/products/${id}`);
  return productDetail.json();
}

export async function generateMetadata({ params }: any) {
  const id = params.id;
  const product = await getDetail(id);
  return {
    title: product?.title,
    describe: product.description,
    openGraph: {
      images: product.thumbnail,
    },
  };
}

async function page({ params }: ParamProps) {
  const id = params.id;
  const productDetail = await getDetail(id);
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={productDetail.thumbnail}
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                {productDetail.title}
              </a>
              <p className="text-xs dark:text-gray-600">
                By
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  {productDetail.description}
                </a>
              </p>
            </div>
            <div className="dark:text-gray-800">
              <p>{productDetail.price}</p>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default page;
