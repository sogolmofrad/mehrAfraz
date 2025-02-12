import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="flex flex-col gap-8 mt-section">
      <footer className="footer  bg-white shadow-lg">
        <div className="container mx-auto mt-section  px-28 max-w-[1300px]">
          <div className="flex justify-between gap-12">
            <div className="w-[40%]  flex flex-col gap-12">
              <img src="/images/logo.webp" alt="logo" className="w-[12rem]" />
              <p className="flex items-center gap-4 text-gray_8">
                <img
                  src="/images/location.svg"
                  className="w-[24px] h-[24px]"
                  alt="location"
                />

                <span className="text-lg">
                  آدرس : خیابان عباس آباد، میدان تختی، ابتدای سورنا، نبش کوچه
                  آریا وطنی پلاک 20
                </span>
              </p>
              <p className="flex items-center gap-4 text-gray_8">
                <BsTelephone className="text-2xl" />
                <span className="text-lg">تلفن پشتیبانی : 2259563 - 021</span>
              </p>
              <p className="flex flex-col gap-4">
                <span className="text-lg text-gray_8">
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
              <div className="flex flex-col gap-8">
                <h3 className="text-lg pr-8 text-gray_8">مهر پرواز</h3>
                <nav>
                  <ul className="flex flex-col gap-4">
                    <li className="text-base text-gray_8 px-8 py-4 hover:rounded-lg hover:bg-gray_2 ">
                      <Link to="/">صفحه اصلی</Link>
                    </li>
                    <li className="text-base text-gray_8 px-8 py-4 hover:rounded-lg hover:bg-gray_2 ">
                      <Link to="/"> درباره ما</Link>
                    </li>
                    <li className="text-base text-gray_8 px-8 py-4 hover:rounded-lg hover:bg-gray_2 ">
                      <Link to="/"> تماس با ما</Link>
                    </li>
                    <li className="text-base text-gray_8 px-8 py-4 hover:rounded-lg hover:bg-gray_2 ">
                      <Link to="/">اخبار</Link>
                    </li>
                    <li className="text-base text-gray_8 px-8 py-4 hover:rounded-lg hover:bg-gray_2 ">
                      <Link to="/">فرصت های شغلی</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex flex-col gap-8">
                <h3 className="text-lg pr-8 text-gray_8">خدمات </h3>
                <nav>
                  <ul className="flex flex-col gap-4">
                    <li className="text-base text-gray_8 px-8 py-4 hover:rounded-lg hover:bg-gray_2 ">
                      <Link to="/">رزرو تور </Link>
                    </li>
                    <li className="text-base text-gray_8 px-8 py-4 hover:rounded-lg hover:bg-gray_2 ">
                      <Link to="/"> بلیط پرواز</Link>
                    </li>
                    <li className="text-base text-gray_8 px-8 py-4 hover:rounded-lg hover:bg-gray_2 ">
                      <Link to="/"> رزرو هتل </Link>
                    </li>
                    <li className="text-base text-gray_8 px-8 py-4 hover:rounded-lg hover:bg-gray_2 ">
                      <Link to="/">پشتیبانی</Link>
                    </li>
                    <li className="text-base text-gray_8 px-8 py-4 hover:rounded-lg hover:bg-gray_2 ">
                      <Link to="/"> تور دلخواه</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="w-[30%] flex flex-col gap-12">
              <h3 className="text-lg text-gray_8">عضویت در خبرنامه</h3>
              <p className="text-base text-gray_8">
                برای اطلاع از جدیدترین تور های مهرپرواز ایمیل خود را وارد کنید
              </p>
              <form className="w-full flex justify-between">
                <input
                  className="w-[75%] p-4  text-sm rounded-xl border-2 border-gray_3 focus:border-pink"
                  type="text"
                  placeholder="آدرس ایمیل خود را وارد کنید"
                />
                <button
                  type="submit"
                  className="text-white px-8 py-4 text-base bg-mainPrimary rounded-xl hover:bg-mainSecondary"
                >
                  ارسال
                </button>
              </form>
            </div>
          </div>
          <div className="flex w-full justify-between mt-20">
            <figure className="p-10 rounded-lg border-2 border-gray_2">
              <img
                src="\images\samandehi-1.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
            <figure className="p-10 rounded-lg border-2 border-gray_2">
              <img
                src="\images\samandehi-2.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
            <figure className="p-10 rounded-lg border-2 border-gray_2">
              <img
                src="\images\samandehi-3.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
            <figure className="p-10 rounded-lg border-2 border-gray_2">
              <img
                src="\images\samandehi-4.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
            <figure className="p-10 rounded-lg border-2 border-gray_2">
              <img
                src="\images\samandehi-5.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
            <figure className="p-10 rounded-lg border-2 border-gray_2">
              <img
                src="\images\samandehi-6.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
            <figure className="p-10 rounded-lg border-2 border-gray_2">
              <img
                src="\images\samandehi-7.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
            <figure className="p-10 rounded-lg border-2 border-gray_2">
              <img
                src="\images\samandehi-8.png"
                alt="samane"
                className="w-[85px]"
              />
            </figure>
          </div>
        </div>
      </footer>
      <div className="copyRight mt-20 bg-white shadow-lg">
        <div className="container mx-auto  py-20  max-w-container flex justify-between my-0">
          <p className="rtl text-lg">
            طراحی و توسعه توسط{" "}
            <Link to="https://artimannovin.ir/" className="text-linkBlue">
              آرتیمان نوین{" "}
            </Link>
            1403
          </p>
          <p className="rtl text-lg">
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
