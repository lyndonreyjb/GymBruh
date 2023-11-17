const Categories = ({ bodyParts, setBodyPart, bodyPart }) => {
  return (
    <div className="max-w-7xl mt-3 mx-auto flex justify-center flex-wrap gap-4">
      {bodyParts.map((category) => (
        <button
          className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          key={category.id || category}
          itemID={category.id || category}
          title={category.id || category}>
          <div
            onClick={() => {
              setBodyPart(category);
            }}
            className="font-semibold capitalize text-black">
            {category}
          </div>
        </button>
      ))}
    </div>
  );
};
export default Categories;
