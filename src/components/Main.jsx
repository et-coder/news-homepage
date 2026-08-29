import heroImgMobile from "../assets/image-web-3-mobile.jpg";
import heroImgDesktop from "../assets/image-web-3-desktop.jpg";

const Main = () => (
  <main className="flex flex-col gap-6">
    <picture>
      <source media="(min-width: 720px)" srcSet={heroImgDesktop} />
      <img src={heroImgMobile} alt="web-3" />
    </picture>

    <div className="lg:flex lg:gap-10">
      <h1 className="text-[42px] text-very-dark-blue leading-10 font-extrabold lg:text-[55px] lg:leading-15 flex-[50%]">
        The Bright Future of Web 3.0?
      </h1>
      <div className="flex-[50%]">
        <p className="text-dark-grayish-blue text-[15px] mt-4 mb-7 leading-6">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="px-8 py-[14px] bg-soft-red text-very-dark-blue tracking-[3px] font-Inter text-[13.4px] uppercase font-bold">
          Read More
        </button>
      </div>
    </div>
  </main>
);

export default Main;
