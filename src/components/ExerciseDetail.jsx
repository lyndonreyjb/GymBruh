const ExerciseDetail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, instructions } =
    exerciseDetail;

  return (
    <div className="min-h-full py-10 flex flex-wrap justify-center items-center">
      <div className="justify-center h-full">
        <div>
          <img src={gifUrl} loading="lazy" />
        </div>
      </div>
      <div className="">
        <div className="capitalize  text-4xl font-medium text-center text-primary lg:text-left">
          {name}
        </div>
        <div className="p-5">
          {instructions &&
          Array.isArray(instructions) &&
          instructions.length > 0 ? (
            instructions.map((info, index) => (
              <ul key={index} className="text-black p-1">
                <li>
                  {index + 1}. {info}
                </li>
              </ul>
            ))
          ) : (
            <p>No instructions available</p>
          )}

          <div className="flex gap-2 py-4">
            <div>{bodyPart}</div>
            <div>{target}</div>
            <div>{equipment}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
