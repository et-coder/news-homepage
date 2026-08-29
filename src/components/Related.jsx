import { related } from "../constants";

const Related = () => (
  <div>
    {related.map((content) => (
      <div className="flex gap-5 mb-8" id={content.id}>
        <img src={content.img} className="w-26" />
        <div>
          <h2 className="font-bold text-soft-red text-3xl">{content.id}</h2>
          <h3 className="text-[18px] font-extrabold my-2">{content.heading}</h3>
          <p className="text-dark-grayish-blue">{content.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Related;
