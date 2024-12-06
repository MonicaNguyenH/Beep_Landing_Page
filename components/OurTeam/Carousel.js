// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const TeamCarousel = () => {
  const teamMembers = [
    { name: "Monica Nguyen", role: "Project Manager", image: "/OurTeam/Mon/mon.png" },
    { name: "Jumi Pham", role: "UX/UI Designer", image: "/OurTeam/Jumi/jumi.png" },
    { name: "Shirin Forouzan", role: "Frontend Designer", image: "/OurTeam/Shirin/shirin.png" },
    { name: "Callista Chan", role: "Frontend Designer", image: "/OurTeam/Cally/callista.png" },
    { name: "Denis Liu", role: "Full Stack Web Developer", image: "/OurTeam/Dennis/denis.png" },
    { name: "Sol Kim", role: "Full Stack Web Developer", image: "/OurTeam/Sol/sol.png" },
    { name: "Christy Wan", role: "Full Stack Web Developer", image: "/OurTeam/Christy/christy.png" },
    { name: "Aless Wei", role: "Full Stack Web Developer", image: "/OurTeam/Aless/aless.png" },
  ];
  return (
    <div className='swiper'>
      
        <Swiper
        id="main"
        breakpoints={{
          868: {
            slidesPerView: 4
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 20
          },
        }}
        centeredSlides={true}
        centeredSlidesBounds={true}
        modules={[Navigation]}
        navigation
        spaceBetween={-20}
        slidesPerView={1.15}
    >
      {teamMembers.map((member, index) => (
        <SwiperSlide key={index}>
          <div className="swiper_card">
            <img
              src={member.image}
              alt={member.name}
              className="image"
            />
            <div className="info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
          </SwiperSlide>
        ))}

    </Swiper>
    </div>
  )
}

export default TeamCarousel;