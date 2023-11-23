import Loading from "./Loading";
const YoutubeVideos = ({ exerciseYoutube, name }) => {
  if (!exerciseYoutube.length) return <Loading />;
  return (
    <div>
      <div className="py-10">
        <h2 className="text-2xl  capitalize font-semibold p-5 text-center">
          Watch videos for <span className="text-primary">{name}</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 place-items-center  ">
        {exerciseYoutube?.slice(0, 3)?.map((item, index) => (
          <a
            className="w-11/12 rounded-lg shadow-xl image-full transform transition duration-500 hover:scale-95"
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer">
            <figure>
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                className="h-full w-full object-contain rounded-t-lg "
              />
            </figure>

            <div className=" p-2">
              <h2 className="text-neutral-600 font-semibold text-sm truncate">
                {item.video.title}
              </h2>
              <h3 className="text-xs truncate">{item.video.channelName}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default YoutubeVideos;
