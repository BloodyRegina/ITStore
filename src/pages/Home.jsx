import Layout from "../components/Layout";
import ProductTypeCard from "../elements/ProductTypeCard";
import Slideshow from "../elements/Slideshow";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Home = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    laptop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const productList = [
    {
      image: "product1.png",
      name: "Keyboard",
    },
    {
      image: "product7.png",
      name: "Headphone",
    },
    {
      image: "product8.png",
      name: "Mouse",
    },
    {
      image: "product9.png",
      name: "Headset",
    },
  ];
  return (
    <Layout>
      <Slideshow />

      {/* product */}
      <div className="gap-10">
        <div className="flex flex-col gap-28 bg-white lg:px-[200px] px-0">
          <h1 className="uppercase text-5xl font-bold mt-10 flex justify-center">
            our products
          </h1>
          <div className="flex w-full">
            <Carousel responsive={responsive} className="w-full">
              {productList.map((p) => (
                <ProductTypeCard key={p.name} {...p} />
              ))}
            </Carousel>
          </div>
          <div></div>
        </div>
        <div className="w-full bg-blue-50 h-16"></div>
        {/* rec section */}

        <div className="flex flex-col mx-auto gap-24">
          <div data-aos="fade-up" data-aos-duration="1500" className="lg:grid lg:grid-cols-2 gap-24 flex flex-col items-center bg-white lg:px-28">
            <img
              src="/images/homemouse.webp"
              alt=""
              className="w-full"
            />
            <div className="flex flex-col justify-center gap-2 w-80">
              <h1 className="text-4xl font-bold">Mouse</h1>
              <div className="rhombus step3"></div>
              <p className="text-sm font-semibold mt-8 mb-8">
                กำหนดค่าเมาส์ของคุณ รวมถึงออปติคอลเซ็นเซอร์ การตั้งค่า DPI
                การเลื่อนและการเร่งความเร็ว การตั้งโปรแกรมปุ่ม
                และหน่วยความจำออนบอร์ด ตั้งโปรแกรม LIGHTSYNC
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className="lg:grid lg:grid-cols-2 gap-24 flex flex-col items-center bg-white lg:px-28">
            <img
              src="/images/homekeyboard.webp"
              alt=""
              className="w-full lg:hidden"
            />
            <div className="flex flex-col justify-center gap-2 w-80">
              <h1 className="text-4xl font-bold">Keyboard</h1>
              <div className="rhombus step3"></div>
              <p className="text-sm font-semibold mt-8 mb-8">
                ตั้งค่าคีย์บอร์ดของคุณด้วย G Keys ที่พร้อมใช้งานมาโคร
                ปรับการเชื่อมโยงแต่ละปุ่มแยกต่างหาก กำหนดค่า การผูกปุ่มหลายปุ่ม
                หรือสร้างมาโครแบบซับซ้อนได้ โปรแกรมLIGHTSYNC  
              </p>
            </div>
            <img
              src="/images/homekeyboard.webp"
              alt=""
              className="w-full hidden lg:block"
            />
          </div>

          <div data-aos="fade-up" data-aos-duration="1500" className="lg:grid lg:grid-cols-2 gap-24 flex flex-col items-center bg-white lg:px-28">
            <img
              src="/images/homeheadphone.webp"
              alt=""
              className="w-full" 
            />
            <div className="flex flex-col justify-center gap-2 w-80">
              <h1 className="text-4xl font-bold">Headphones and Speakers</h1>
              <div className="rhombus step3"></div>
              <p className="text-sm font-semibold mt-8 mb-8">
                ตั้งค่าEQแบบกำหนดเองและค่ากำหนดระบบเซอร์ราวด์ของแต่ละโปรไฟล์เกมแยกกันได้
                กำหนด G Keys ที่ติดตั้งบนชุดหูฟังเพื่อการเล่นที่เร็วกว่า
                และแม่นยำกว่า โปรแกรมอุปกรณ์เสียง LIGHTSYNC
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className="lg:grid lg:grid-cols-2 gap-24 flex flex-col items-center bg-white lg:px-28">
            <img
              src="/images/homewebcam.webp"
              alt=""
              className="w-full lg:hidden"
            />
            <div className="flex flex-col justify-center gap-2 w-80">
              <h1 className="text-4xl font-bold">Webcam</h1>
              <div className="rhombus step3"></div>
              <p className="text-sm font-semibold mt-8 mb-8">
                สร้างโปรไฟล์กล้องและวิดีโอ
                การตั้งค่าได้รับการจัดเก็บและนำไปใช้ตั้งแต่เริ่มต้น
                สลับโปรไฟล์ขณะใช้งานได้
              </p>
            </div>
            <img
              src="/images/homewebcam.webp"
              alt=""
              className="w-full hidden lg:block"
            />
          </div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
