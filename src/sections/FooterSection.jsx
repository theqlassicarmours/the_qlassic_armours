import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <img
        src={import.meta.env.BASE_URL + "images/footer-dip.png"}
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            ##WEARCONFIDENTLY
          </h1>
        </div>

        {isMobile ? (
          <img
            src={import.meta.env.BASE_URL + "images/footer-drink.png"}
            className="absolute top-0 object-contain"
          />
        ) : (
          <video
            src={import.meta.env.BASE_URL + "videos/splash.mp4"}
            autoPlay
            playsInline
            muted
            className="absolute top-0 object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src={import.meta.env.BASE_URL + "images/yt.svg"} alt="" />
          </div>
          <div className="social-btn">
            <img src={import.meta.env.BASE_URL + "images/insta.svg"} alt="" />
          </div>
          <div className="social-btn">
            <img src={import.meta.env.BASE_URL + "images/tiktok.svg"} alt="" />
          </div>
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>Qlassic Armor</p>
            </div>
            <div>
  <p>Style Club</p>
<p>Custom Orders</p>
<p>Partner Creators</p>
            </div>
            <div>
<p>Company</p>
<p>Contact Us</p>
<p>Style Journal</p>
            </div>
          </div>

<div className="md:max-w-lg">
  <p>
Get Exclusive Early Access and Stay Updated About New
Collections, Offers, and More!
  </p>

  <div className="flex justify-between items-center border-b border-[#80c4d6] py-5 md:mt-10">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full placeholder:font-sans placeholder:text-[#75c1d3]"
    />

    <img
      src={import.meta.env.BASE_URL + "images/arrow.svg"}
      alt="arrow"
    />
  </div>
</div>

</div>

<div className="copyright-box">
  {/* The final row with copyright and legal links. */}
<p>Copyright © 2026 Qlassic Armor - All Rights Reserved</p>
  <div className="flex items-center gap-7">
    <p>Privacy Policy</p>
    <p>Terms of Sеrvice</p>
  </div>
</div>
      </div>
    </section>
  );
};

export default FooterSection;
