import type { ReactElement } from "react"
import { useState } from "react"
import type { Swiper as SwiperType } from "swiper"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"

import { JOB_CARDS } from "../../../data/careers"
import { JobCard } from "./JobCard"

export function JobCarousel(): ReactElement {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="min-w-0 flex-1 lg:pl-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView="auto"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        className="py-12 lg:pl-2!"
        onReachEnd={(swiper: SwiperType) => {
          if (swiper.autoplay) {
            // Reverse direction cleanly
            const params = swiper.params.autoplay as {
              reverseDirection?: boolean
            }
            params.reverseDirection = true
            swiper.autoplay.start()
          }
        }}
        onReachBeginning={(swiper: SwiperType) => {
          if (swiper.autoplay) {
            const params = swiper.params.autoplay as {
              reverseDirection?: boolean
            }
            params.reverseDirection = false
            swiper.autoplay.start()
          }
        }}
        onSlideChange={(swiper: SwiperType) => {
          if (swiper.isEnd) {
            setActiveIndex(JOB_CARDS.length - 1)
          } else {
            setActiveIndex(swiper.activeIndex)
          }
        }}
        onProgress={(swiper: SwiperType) => {
          if (swiper.isEnd) {
            setActiveIndex(JOB_CARDS.length - 1)
          } else if (swiper.isBeginning) {
            setActiveIndex(0)
          } else {
            setActiveIndex(swiper.activeIndex)
          }
        }}
      >
        {JOB_CARDS.map((card, index) => {
          const isActive = index === activeIndex

          return (
            <SwiperSlide
              key={card.id}
              className="group h-auto! w-[85vw]! md:w-[600px]! lg:w-[680px]! xl:w-[760px]!"
            >
              <JobCard card={card} isActive={isActive} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
