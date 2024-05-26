import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flexCenter pb-24 pt-20">
      <div className="max_padd_container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link to="/" className="mb-10 bold-20">
            Shoppee
          </Link>
          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
            <FooterColumn>
              <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                <Link to="/"></Link>
              </ul>
            </FooterColumn>

            <div className="flex flex-col gap-5">
              <FooterColumn>
                <Link to="/" className="flex gap-4 md:flex-col lg:flex-row">
                  <p>:</p>
                  <p className="medium-14"></p>
                </Link>
              </FooterColumn>
            </div>
            <div className="flex">
              <FooterColumn>
                <ul className="flex gap-4">
                  <Link to="/">
                    <img alt="socialIcon" height={22} width={22} />
                  </Link>
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20"></div>
        <p className="text-center regular-14 text-gray-30">
          2024 Shoppee | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
