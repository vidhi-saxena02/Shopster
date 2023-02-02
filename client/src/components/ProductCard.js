function ProductCard({ title, price, image, category }) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={image} alt={title} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}t</div>
        <p class="text-gray-700 text-base font-bold">Price-{price}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {category}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
