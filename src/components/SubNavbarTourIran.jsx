import { Link } from "react-router";

function SubNavbarTourIran() {
  return (
    <div className="z-50 w-full bg-white  absolute top-[100%] right-0  p-12 flex justify-between items-center rounded-b-lg border-2 border-t-0">
      <nav className="flex gap-40 text-sm text-grey navbar">
        <div className="flex flex-col gap-12">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to=""
                className="text-black border-r-2 border-mainPrimary pr-3"
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
          <ul className="flex flex-col gap-4 mt-12 ">
            <li>
              <Link
                to=""
                className="text-black border-r-2 border-mainPrimary pr-3"
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
          <ul className="flex flex-col gap-4 mt-12 ">
            <li>
              <Link
                to=""
                className="text-black border-r-2 border-mainPrimary pr-3"
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
        <div className="flex flex-col gap-12">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to=""
                className="text-black border-r-2 border-mainPrimary pr-3"
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
          <ul className="flex flex-col gap-4 mt-12 ">
            <li>
              <Link
                to=""
                className="text-black border-r-2 border-mainPrimary pr-3"
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
          <ul className="flex flex-col gap-4 mt-12 ">
            <li>
              <Link
                to=""
                className="text-black border-r-2 border-mainPrimary pr-3"
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
