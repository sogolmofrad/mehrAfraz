import { Link } from "react-router";

function SubNavbarTourIran() {
  return (
    <div className="z-50 w-full bg-white  absolute top-[100%] right-0  p-[3rem] flex justify-between items-center rounded-b-[2.4rem] border-2 border-t-0">
      <nav className="flex gap-[10rem] text-[1.4rem] text-grey navbar">
        <div className="flex flex-col gap-[3rem]">
          <ul className="flex flex-col gap-[1rem]">
            <li>
              <Link
                to=""
                className="text-black border-r-2 border-red_5 pr-[7px]"
              >
                تور استان آذربایجان شرقی
              </Link>
            </li>
            <li>
              <Link to="">تور جلفا</Link>
            </li>
            <li>
              <Link to="">تور کلیبر </Link>
            </li>
            <li>
              <Link to="">تور تبریز </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-[1rem] mt-[3rem] ">
            <li>
              <Link
                to=""
                className="text-black border-r-2 border-red_5 pr-[7px]"
              >
                تور استان آذربایجان غربی
              </Link>
            </li>
            <li>
              <Link to="">تور مهاباد</Link>
            </li>
            <li>
              <Link to="">تور ارومیه </Link>
            </li>
            <li>
              <Link to="">تور تکاب </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-[1rem] mt-[3rem] ">
            <li>
              <Link
                to=""
                className="text-black border-r-2 border-red_5 pr-[7px]"
              >
                تور استان اردبیل
              </Link>
            </li>
            <li>
              <Link to="">تور خلخال</Link>
            </li>
            <li>
              <Link to="">تور اردبیل </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[3rem]">
          <ul className="flex flex-col gap-[1rem]">
            <li>
              <Link
                to=""
                className="text-black border-r-2 border-red_5 pr-[7px]"
              >
                تور استان آذربایجان شرقی
              </Link>
            </li>
            <li>
              <Link to="">تور جلفا</Link>
            </li>
            <li>
              <Link to="">تور کلیبر </Link>
            </li>
            <li>
              <Link to="">تور تبریز </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-[1rem] mt-[3rem] ">
            <li>
              <Link
                to=""
                className="text-black border-r-2 border-red_5 pr-[7px]"
              >
                تور استان آذربایجان غربی
              </Link>
            </li>
            <li>
              <Link to="">تور مهاباد</Link>
            </li>
            <li>
              <Link to="">تور ارومیه </Link>
            </li>
            <li>
              <Link to="">تور تکاب </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-[1rem] mt-[3rem] ">
            <li>
              <Link
                to=""
                className="text-black border-r-2 border-red_5 pr-[7px]"
              >
                تور استان اردبیل
              </Link>
            </li>
            <li>
              <Link to="">تور خلخال</Link>
            </li>
            <li>
              <Link to="">تور اردبیل </Link>
            </li>
          </ul>
        </div>
      </nav>
      <figure>
        <img src="/images/banner-1.png" alt="banner" />
      </figure>
    </div>
  );
}

export default SubNavbarTourIran;
