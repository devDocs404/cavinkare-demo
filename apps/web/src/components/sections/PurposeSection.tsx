import type { ReactElement } from "react"
import { useState } from "react"
import type { Swiper as SwiperType } from "swiper"
import { Keyboard, Mousewheel, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import { PURPOSE_SLIDES } from "../../data/purpose"

export function PurposeSection(): ReactElement {
  const [activeIndex, setActiveIndex] = useState(1)
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  return (
    <section className="overflow-hidden bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto mb-12 max-w-4xl px-4 text-center">
        <div className="max-w-5xl text-center">
          <h2 className="text-4xl leading-[0.95] font-bold tracking-[-0.05em] text-brand-dark sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
            Cavin Cares: <span className="text-gradient-brand">Purpose</span>
            <br />
            Beyond <span className="text-gradient-brand">Products</span>
          </h2>
          {/* SUBTITLE */}
          <p className="mx-auto mt-10 max-w-full px-4 text-center text-xs leading-relaxed font-semibold text-gray-500 sm:text-sm sm:whitespace-nowrap md:text-base lg:text-lg dark:text-gray-400">
            <span>
              From empowering achievers with disabilities to championing
              sustainability and education, CavinKare is committed to{" "}
            </span>
            <br />
            <span>
              driving meaningful change across communities. Our care goes beyond
              commerce — it shapes a better tomorrow.
            </span>
          </p>
        </div>
      </div>

      <div className="relative w-full px-0 pb-16">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={1}
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true }}
          modules={[Pagination, Keyboard, Mousewheel]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper)
            setActiveIndex(swiper.realIndex)
          }}
          className="w-full overflow-visible! py-10"
          slideToClickedSlide={true}
          spaceBetween={-20}
          breakpoints={{
            640: { spaceBetween: -30 },
            1024: { spaceBetween: -40 },
          }}
        >
          {PURPOSE_SLIDES.map((slide, index) => {
            const isActive = activeIndex === index
            return (
              <SwiperSlide
                key={slide.id}
                onClick={() => swiperInstance?.slideTo(index)}
                style={{ width: "460px", height: "500px" }}
                className={`relative flex shrink-0 cursor-pointer overflow-hidden rounded-3xl opacity-100 transition-all duration-300 ${
                  isActive ? "z-10 scale-110 shadow-2xl" : "z-0 scale-90"
                }`}
              >
                <div className="group relative h-full w-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />

                  {/* Gradient overlay for text */}
                  <div
                    className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Text Content */}
                  <div
                    className={`absolute right-0 bottom-0 left-0 transform p-8 text-left transition-all duration-300 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                    }`}
                  >
                    <h3 className="mb-3 text-xl font-bold text-white">
                      {slide.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-white/80">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        {/* Custom Pagination */}
        <div className="mt-12 flex w-full items-center justify-end gap-4 md:w-[80%]">
          <div className="flex items-center justify-between gap-4">
            <div className="relative mt-1 h-2 w-24 overflow-hidden rounded-full bg-gray-200 md:w-32 dark:bg-gray-800">
              <div
                className="absolute top-0 left-0 h-full rounded-full bg-brand-red transition-transform duration-300 ease-out"
                style={{
                  width: `${100 / PURPOSE_SLIDES.length}%`,
                  transform: `translateX(${activeIndex * 100}%)`,
                }}
              />
            </div>
            <div className="flex items-baseline gap-3 text-sm font-medium md:text-base">
              {PURPOSE_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => swiperInstance?.slideTo(idx)}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeIndex === idx
                      ? "text-xl font-bold text-brand-red md:text-2xl"
                      : "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
