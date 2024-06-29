"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstructorItem from "./instructor-item";

const instructors = [
  {
    imageSrc: '/m-4.jpg',
    title: 'Producer cần biết làm chủ công nghệ',
    name: 'Để sản xuất ra một bài hát, producer cần phải sử dụng rất nhiều công cụ, phần mềm như Soundboard, Pro tools, FL Studio, Cakewalk sonar, Ableton,...',

  },
  {
    imageSrc: '/m-5.jpg',
    title: 'Mối quan hệ rộng rãi góp phần tạo nên sự thành công của producer',
    name: '“Muốn đi xa hãy đi cùng nhau”, vậy nên một producer dù có tài năng cỡ nào thì sẽ không thể duy trì phong độ lâu dài nếu chỉ phụ thuộc vào trình độ của bản thân',

  },
  {
    imageSrc: '/m-6.jpg',
    title: 'Nắm rõ và làm chủ được các loại nhạc cụ sẻ dùng đến',
    name: 'Có vô vàn loại nhạc cụ để tạo ra một bài nhạc hay nhưng để tạo ra nó mỗi người đều có một tư duy đặc biệt riêng để khiến bài hát trở nên độc nhất và là sự nhận diện của cá nhân đó',

  },
  {
    imageSrc: '/m-7.jpg',
    title: 'Producer cần có chất xám,sự tư duy,và phong cách đậm chất cá nhân',
    name: 'Hiểu xu hướng, thị hiếu công chúng, có tầm nhìn xa trông rộng, biết nắm bắt xu hướng của ngành chính là những yếu tố giúp các producer tạo ra những sản phẩm khác biệt',

  },
  {
    imageSrc: '/m-8.jpg',
    title: 'Học Producer trong bao lâu ?  ',
    name: 'Thời gian học có thể thay đổi tuỳ theo nhiều yếu tố như mức độ cam kết, nền tảng kiến thức âm nhạc, mục tiêu cụ thể và tài nguyên học tập mà bạn sử dụng',

  },
  {
    imageSrc: '/m-9.jpg',
    title: 'Đội ngũ hỗ trợ',
    name: 'Đội ngũ hỗ trợ của chúng tôi luôn túc trực từ 6-18h từ thứ 2 đến thứ 7',

  }
];

const Instructors = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div className='px-32 pt-8 mt-16'>
      <div className='flex justify-center'>
        <h1 className='text-3xl font-bold drop-shadow-custom bg-gradient-to-r from-[#a8c0ff] to-[#3f2b96] bg-clip-text text-transparent'>Những hình ảnh thực tế</h1>
      </div>
      <div className="pt-4 mt-2">
        <Slider {...settings}>
          {instructors.map((instructor, index) => (
            <InstructorItem
              key={index}
              imageSrc={instructor.imageSrc}
              title={instructor.title}
              name={instructor.name}

            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Instructors
