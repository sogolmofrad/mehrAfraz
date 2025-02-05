import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="flex flex-col gap-[2rem] mt-section">
      <footer className="footer  bg-white shadow-lg">
        <div className="container mx-auto mt-[5rem] py-[5rem] px-[7rem] max-w-[1300px]">
          <div className="flex justify-between gap-[3rem]">
            <div className="w-[40%]  flex flex-col gap-[3rem]">
              <img src="/images/logo.webp" alt="logo" className="w-[12rem]" />
              <p className="flex items-center gap-[1rem] text-gray_8">
                <img
                  src="/images/location.svg"
                  className="w-[24px] h-[24px]"
                  alt="location"
                />

                <span className="text-[1.8rem]">
                  آدرس : خیابان عباس آباد، میدان تختی، ابتدای سورنا، نبش کوچه
                  آریا وطنی پلاک 20
                </span>
              </p>
              <p className="flex items-center gap-[1rem] text-gray_8">
                <BsTelephone className="text-[2.4rem]" />
                <span className="text-[1.8rem]">
                  تلفن پشتیبانی : 2259563 - 021
                </span>
              </p>
              <p className="flex flex-col gap-[1rem]">
                <span className="text-[1.8rem] text-gray_8">
                  مهر پرواز را در شبکه های اجتماعی دنبال کنید
                </span>
                <div className="flex w-full justify-between">
                  <figure className="px-[12px] py-[10px] hover:bg-footerIconHover">
                    <img
                      className="svg w-[30px]"
                      src="/images/Instagram.svg"
                      alt="Instagram"
                    />
                  </figure>
                  <figure className="px-[12px] py-[10px] hover:bg-footerIconHover">
                    <img
                      className="svg w-[30px]"
                      src="/images/Telegram.svg"
                      alt="x"
                    />
                  </figure>
                  <figure className="px-[12px] py-[10px] hover:bg-footerIconHover">
                    <img className="svg w-[30px]" src="/images/x.svg" alt="x" />
                  </figure>
                  <figure className="px-[12px] py-[10px] hover:bg-footerIconHover">
                    <img
                      className="svg w-[30px]"
                      src="/images/youtube.svg"
                      alt="youtube"
                    />
                  </figure>
                  <figure className="px-[12px] py-[10px] hover:bg-footerIconHover">
                    <img
                      className="svg w-[30px]"
                      src="/images/Linkdin.svg"
                      alt="Linkdin"
                    />
                  </figure>
                  <figure className="px-[12px] py-[10px] hover:bg-footerIconHover">
                    <img
                      className="svg w-[30px]"
                      src="/images/whatsapp.svg"
                      alt="whatsapp"
                    />
                  </figure>
                  <figure className="px-[12px] py-[10px] hover:bg-footerIconHover">
                    <img
                      className="svg w-[30px]"
                      src="/images/Aparat.svg"
                      alt="Aparat"
                    />
                  </figure>
                  <figure className="px-[12px] py-[10px] hover:bg-footerIconHover">
                    <img
                      className="svg w-[30px]"
                      src="/images/facebook.svg"
                      alt="facebook"
                    />
                  </figure>
                </div>
              </p>
            </div>
            <div className="flex">
              <div className="flex flex-col gap-[2rem]">
                <h3 className="text-[1.8rem] pr-[2rem]">مهر پرواز</h3>
                <nav>
                  <ul className="flex flex-col gap-[1rem]">
                    <li className="text-[1.6rem] text-gray_8 px-[2rem] py-[1rem] hover:rounded-[2.4rem] hover:bg-greyLight">
                      <Link to="/">صفحه اصلی</Link>
                    </li>
                    <li className="text-[1.6rem] text-gray_8 px-[2rem] py-[1rem] hover:rounded-[2.4rem] hover:bg-greyLight">
                      <Link to="/"> درباره ما</Link>
                    </li>
                    <li className="text-[1.6rem] text-gray_8 px-[2rem] py-[1rem] hover:rounded-[2.4rem] hover:bg-greyLight">
                      <Link to="/"> تماس با ما</Link>
                    </li>
                    <li className="text-[1.6rem] text-gray_8 px-[2rem] py-[1rem] hover:rounded-[2.4rem] hover:bg-greyLight">
                      <Link to="/">اخبار</Link>
                    </li>
                    <li className="text-[1.6rem] text-gray_8 px-[2rem] py-[1rem] hover:rounded-[2.4rem] hover:bg-greyLight">
                      <Link to="/">فرصت های شغلی</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col gap-[2rem]">
                <h3 className="text-[1.8rem] pr-[2rem]">خدمات </h3>
                <nav>
                  <ul className="flex flex-col gap-[1rem]">
                    <li className="text-[1.6rem] text-gray_8 px-[2rem] py-[1rem] hover:rounded-[2.4rem] hover:bg-greyLight">
                      <Link to="/">رزرو تور </Link>
                    </li>
                    <li className="text-[1.6rem] text-gray_8 px-[2rem] py-[1rem] hover:rounded-[2.4rem] hover:bg-greyLight">
                      <Link to="/"> بلیط پرواز</Link>
                    </li>
                    <li className="text-[1.6rem] text-gray_8 px-[2rem] py-[1rem] hover:rounded-[2.4rem] hover:bg-greyLight">
                      <Link to="/"> رزرو هتل </Link>
                    </li>
                    <li className="text-[1.6rem] text-gray_8 px-[2rem] py-[1rem] hover:rounded-[2.4rem] hover:bg-greyLight">
                      <Link to="/">پشتیبانی</Link>
                    </li>
                    <li className="text-[1.6rem] text-gray_8 px-[2rem] py-[1rem] hover:rounded-[2.4rem] hover:bg-greyLight">
                      <Link to="/"> تور دلخواه</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="w-[30%] flex flex-col gap-[3rem]">
              <h3 className="text-[1.8rem]">عضویت در خبرنامه</h3>
              <p className="text-[1.6rem] text-gray_8">
                برای اطلاع از جدیدترین تور های مهرپرواز ایمیل خود را وارد کنید
              </p>
              <form className="w-full flex justify-between">
                <input
                  className="w-[75%] p-[1rem]  text-[1.4rem] rounded-[3.2rem] border-2 border-gray_3 focus:border-pink"
                  type="text"
                  placeholder="آدرس ایمیل خود را وارد کنید"
                />
                <button
                  type="submit"
                  className="text-white px-[2rem] py-[1rem] text-[1.6rem] bg-red_5 rounded-[3.2rem] hover:bg-redSecondary"
                >
                  ارسال
                </button>
              </form>
            </div>
          </div>
          <div className="flex w-full justify-between mt-[5rem]">
            <figure className="p-[2.4rem] rounded-[2.4rem] border-2 border-gray_2">
              <img
                src="\images\samandehi-1.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
            <figure className="p-[2.4rem] rounded-[2.4rem] border-2 border-gray_2">
              <img
                src="\images\samandehi-2.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
            <figure className="p-[2.4rem] rounded-[2.4rem] border-2 border-gray_2">
              <img
                src="\images\samandehi-3.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
            <figure className="p-[2.4rem] rounded-[2.4rem] border-2 border-gray_2">
              <img
                src="\images\samandehi-4.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
            <figure className="p-[2.4rem] rounded-[2.4rem] border-2 border-gray_2">
              <img
                src="\images\samandehi-5.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
            <figure className="p-[2.4rem] rounded-[2.4rem] border-2 border-gray_2">
              <img
                src="\images\samandehi-6.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
            <figure className="p-[2.4rem] rounded-[2.4rem] border-2 border-gray_2">
              <img
                src="\images\samandehi-7.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
            <figure className="p-[2.4rem] rounded-[2.4rem] border-2 border-gray_2">
              <img
                src="\images\samandehi-8.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
          </div>
        </div>
      </footer>
      <div className="copyRight  bg-white shadow-lg">
        <div className="container mx-auto mt-[5rem] py-[5rem]  max-w-container flex justify-between">
          <p className="rtl text-[1.8rem]">
            طراحی و توسعه توسط{" "}
            <Link to="https://artimannovin.ir/" className="text-linkBlue">
              آرتیمان نوین{" "}
            </Link>
            1403
          </p>
          <p className="rtl text-[1.8rem]">
            Designed by{" "}
            <Link to="https://artimannovin.ir/" className="text-linkBlue">
              Artiman - iTour{" "}
            </Link>
            2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
