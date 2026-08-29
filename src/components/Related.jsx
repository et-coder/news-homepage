import { related } from "../constants";

const Related = () => (
  <div className="flex flex-col lg:flex-row lg:col-span-2 lg:items-center lg:gap-6">
    {related.map((content) => (
      <div className="flex gap-6 mb-8 lg:max-w-[355px]" id={content.id}>
        <img src={content.img} className="w-26" />
        <div>
          <h2 className="font-bold text-soft-red text-3xl">{content.id}</h2>
          <h3 className="text-[18px] font-extrabold my-2">{content.heading}</h3>
          <p className="text-dark-grayish-blue text-[15.5px]">
            {content.description}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default Related;
