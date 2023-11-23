const ExerciseDetail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, instructions } =
    exerciseDetail;

  return (
    <div className="min-h-full flex md:flex-row flex-col">
      <div>
        <img
          src={gifUrl}
          loading="lazy"
          className="h-96 w-96 object-contain mx-auto"
        />
      </div>
      <div className="flex-1">
        <div className="capitalize text-4xl font-medium text-center text-primary lg:text-left">
          {name}
        </div>

        <div className="p-2">
          <div className="mb-2 text-lg font-semibold">
            <p>Instructions</p>
          </div>

          {instructions &&
          Array.isArray(instructions) &&
          instructions.length > 0 ? (
            <ul className="text-black p-1">
              {instructions.map((info, index) => (
                <li key={index}>
                  {index + 1}. {info}
                </li>
              ))}
            </ul>
          ) : (
            <p>No instructions available</p>
          )}

          <div className="flex gap-2 py-4">
            <div className="btn btn-outline btn-primary">{bodyPart}</div>
            <div className="btn btn-outline btn-primary">{target}</div>
            <div className="btn btn-outline btn-primary">{equipment}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
