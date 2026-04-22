import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/slide1.png";
import slide2 from "../../../assets/slide2.png";
import slide3 from "../../../assets/slide3.png";
import slide4 from "../../../assets/slide4.png";
import offer1 from "../../../assets/offer1.png";
import offer2 from "../../../assets/offer2.png";
import offer3 from "../../../assets/offer3.png";
import offer4 from "../../../assets/offer4.png";
import offer5 from "../../../assets/offer5.png";
import offer6 from "../../../assets/offer6.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Home() {
    const offers = [
    {
      id: 1,
      image: offer1,
      title: "CAMP CERVICES",
    },
    {
      id: 2,
      image: offer2,
      title: "Logistics Services",
    },
    {
      id: 3,
      image: offer3,
      title: "waste management Services",
    },
    {
      id: 4,
      image: offer4,
      title: "Transportation Services",
    },
    {
      id: 5,
      image: offer5,
      title: "General Maintenance",
    },
    {
      id: 6,
      image: offer6,
      title: "Management Pest Control Services",
    },
  ];

  return (
    <section style={{ paddingTop: "80px" }} className="container lg:container_lg xl:container">
      <div>
        <h1 className="text-white font-[600] text-[32px] md:text-[34.5px] lg:text-[43px] xl:text-[60px] leading-tight italic mx-auto">
          for catering, services{" "}
          <span className="text-white opacity-50 font-light not-italic">and</span> General Transportation 
          <span className="text-white opacity-50 font-light not-italic"> and</span>{" "}
          <span className="text-[#9D1A10] font-[600] not-italic">Real Estate Investment</span>
        </h1>
        <div className="border-t-1 border-t-white/50 border-b-1 border-b-white/30 border-l-1 border-l-white/30 border-r-1 border-r-white/30 rounded-2xl " style={{ padding:"15px 20px" , marginTop:"20px"}}>
          <p
            className="text-white font-[200] text-[20px] text-justify md:text-[17px] lg:text-[17.5px] xl:text-[23.5px] leading-relaxed mx-auto"
          >
            <strong>4Seasons </strong>
            is proudly from Iraq, run full service catering company based under
            the sky of Iraq. It was founded in 2016 by a person who has a
            respective experiences in food service & event management – that
            culminated into this wonderful entity. His leadership qualities
            and tenacity allowed to bring <strong>4Seasons</strong> Company to
            where it is today.
          </p>
        </div>
        {/* Slide Section */}
        <div className="hidden md:block ">
          <div className="grid grid-cols-[2fr_1fr_2fr_2fr] gap-6" style={{ marginTop:"40px" }}>
        {/* Small Image */}
            <img
              src={slide1}
              alt="slide1"
              className="w-full h-[276px] md:h-[200px] xl:h-[276px]"
            />

            {/* Big Image */}
            <img
              src={slide2}
              alt="slide2"
              className="w-full h-[276px] md:h-[200px] xl:h-[276px]"
            />

            {/* Big Image */}
            <img
              src={slide3}
              alt="slide3"
              className="w-full h-[276px] md:h-[200px] xl:h-[276px]"
            />

            {/* Big Image */}
            <img
              src={slide4}
              alt="slide4"
              className="w-full h-[276px] md:h-[200px] xl:h-[276px]"
            />

      </div>

        </div>
        <section className="slidertext-white block md:hidden" style={{ marginTop: "40px" }}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <img
                src={slide1}
                alt="slider1"
                className="w-[100%] max-h-[250px] object-contain rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide2}
                alt="slider2"
                className="w-[100%] max-h-[250px] object-contain rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide3}
                alt="slider3"
                className="w-[100%] max-h-[250px] object-contain rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide4}
                alt="slider4"
                className="w-[100%] max-h-[250px] object-contain rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </section>
        {/* Offers Section */}
        <section className="offers text-center" style={{ marginTop: "40px" }}>
          <p className="text-white text-[24px] font-light opacity-50 text-center">
            Try our distinguished services
          </p>
          <h2 className="text-white text-[36px] font-bold mb-4 text-center">What We <span className="text-[#9D1A10]">Offers</span> </h2>
          <p className="text-white text-[23px] text-justify md:text-[17.5px] xl:text-[24.5px] leading-relaxed md:text-left opacity-90 font-light">
            Continuously improve the quality of our food, beverage. hospitality
            and retail outlets to ensure they deliver a highly innovative and
            contemporary service, meeting the diverse needs of our customers
            expectations and desires
          </p>
          <div className="offers-image grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8" style={{ marginTop: "20px" }}>
            {offers.map((offer, index) => (
              <figure
                key={offer.id}
                className="relative rounded-l shadow-md hover:shadow-lg transition"
              >
                <div
                  className={`
                    absolute rounded-full -z-10
                    ${index === 0
                      ? "w-[200px] h-[200px] top-[33%] left-[12%] md:top-[23%] md:left-[5%] lg:top-[7%] lg:left-[3%] xl:top-[33%] xl:left-[12%] bg-[#9D1A10]"
                      : "w-[350px] h-[350px] left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#9d19108a] blur-3xl opacity-90"
                    }
                  `}
                ></div>
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full object-cover"
                />

                <figcaption className="p-4 text-center" style={{ marginTop: "10px" }}>
                  <p className="text-[22px] lg:text-[18px] xl:text-[22px] font-light text-white opacity-80">
                    {offer.title}
                  </p>
                </figcaption>

              </figure>
            ))}

        </div>
        </section>
      </div>
    </section>
  );
}
