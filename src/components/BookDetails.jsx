import React from "react";

const BookDetails = () => {
  return (
    <div className="font-[sans-serif] p-4">
      <div className="xl:max-w-screen-xl lg:max-w-screen-lg max-w-xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 max-lg:gap-12 max-sm:gap-8">
          <div className="w-full lg:sticky top-0 lg:col-span-3">
            <div className="flex flex-row gap-2">

              <div className="flex-1">
                <img src="https://readymadeui.com/images/product6.webp" alt="Product" className="w-full aspect-[750/800] object-top object-cover" />
              </div>
            </div>
          </div>

          <div className="w-full lg:col-span-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">React and React Native</h3>
              <div className="flex items-center space-x-1 mt-2">
                <svg className="w-4 h-4 fill-purple-800" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 h-4 fill-purple-800" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 h-4 fill-purple-800" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 h-4 fill-purple-800" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-4 h-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>

                <p className="text-sm text-gray-800 !ml-3">Adam Boduch</p>
              </div>
              <div className="flex items-center flex-wrap gap-4 mt-6">
                <h4 className="text-gray-800 text-2xl font-bold">$17</h4>
                <p className="text-gray-500 text-lg"><strike>$22</strike> <span className="text-sm ml-1.5">Tax included</span></p>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            <div>
              <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                <button type="button" className="w-10 h-9 border border-gray-300 hover:border-purple-600 text-gray-800 text-sm flex items-center justify-center shrink-0">SM</button>
                <button type="button" className="w-10 h-9 border border-purple-600 hover:border-purple-600 text-purple-800 text-sm flex items-center justify-center shrink-0">MD</button>
                <button type="button" className="w-10 h-9 border border-gray-300 hover:border-purple-600 text-gray-800 text-sm flex items-center justify-center shrink-0">LG</button>
                <button type="button" className="w-10 h-9 border border-gray-300 hover:border-purple-600 text-gray-800 text-sm flex items-center justify-center shrink-0">XL</button>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800">Colors</h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  <button type="button" className="w-10 h-9 bg-gray-600 border border-transparent hover:border-purple-600 text-gray-800 text-sm flex items-center justify-center shrink-0"></button>
                  <button type="button" className="w-10 h-9 bg-black border border-purple-600 hover:border-purple-600 text-purple-800 text-sm flex items-center justify-center shrink-0"></button>
                  <button type="button" className="w-10 h-9 bg-blue-600 border border-transparent hover:border-purple-600 text-gray-800 text-sm flex items-center justify-center shrink-0"></button>
                  <button type="button" className="w-10 h-9 bg-purple-600 border border-transparent hover:border-purple-600 text-gray-800 text-sm flex items-center justify-center shrink-0"></button>
                </div>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />



            <hr className="my-6 border-gray-300" />


          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-100 px-6 py-12">
        <div className="xl:max-w-screen-xl max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-800">PRODUCT INFORMATION</h3>

              <div>
                <h3 className="text-gray-800 text-sm font-bold">Material:</h3>
                <p className="text-sm text-gray-500 mt-2">100% Organic Cotton</p>
              </div>

              <div>
                <h3 className="text-gray-800 text-sm font-bold">Care Guidelines:</h3>
                <p className="text-sm text-gray-500 mt-2">Wash cold, tumble dry low, do not bleach.</p>
              </div>

              <div>
                <h3 className="text-gray-800 text-sm font-bold">Features:</h3>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-gray-500">
                  <li>Eco-friendly, breathable fabric.</li>
                  <li>ClassNameic fit for everyday comfort.</li>
                  <li>Durable stitching for long-lasting wear.</li>
                  <li>Available in multiple colors and sizes.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-800">SHIPPING & RETURNS</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-800 text-sm font-bold mb-2">Standard Shipping</p>
                    <p className="text-gray-500 text-sm">Delivery in 3-5 business days</p>
                  </div>
                  <span className="text-gray-500 text-sm">$5.00</span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-800 text-sm font-bold mb-2">Expedited Shipping</p>
                    <p className="text-gray-500 text-sm">Delivery in 1-2 business days</p>
                  </div>
                  <span className="text-gray-500 text-sm">$15.00</span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-800 text-sm font-bold mb-2">Pickup Option</p>
                    <p className="text-gray-500 text-sm">Available within 24 hours</p>
                  </div>
                  <span className="text-gray-500 text-sm">FREE</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-500">For more details on our return policy, <span className="underline">click here</span>.</p>
                <p className="text-sm text-gray-500">A $3.00 processing fee applies to returns. <span className="underline">Learn more</span>.</p>
                <p className="text-sm text-gray-500">Returns for online orders must be initiated online. In-store returns are not accepted.</p>
                <p className="text-sm text-gray-500">To promote sustainability, we now use electronic return labels. <span className="underline">Read more</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;