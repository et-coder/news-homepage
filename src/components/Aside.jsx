import { asides } from "../constants";

const Aside = () => (
  <aside className="bg-very-dark-blue text-white p-4 my-8 lg:mt-0">
    <h2 className="text-[32px] font-bold text-soft-orange mb-7">New</h2>
    <div className="flex flex-col gap-4">
      {asides.map((aside) => (
        <div className="not-last:border-b border-b-dark-grayish-blue not-last:pb-8 pb-4 not-last:mb-3">
          <h3 className="text-[20px] font-bold mb-1">{aside.heading}</h3>
          <p className="text-grayish-blue">{aside.description}</p>
        </div>
      ))}
    </div>
  </aside>
);

export default Aside;
