import { domainName } from "../../siteinformation";

const Company = () => {
  return (
    <div className="container-fluid bg-light text-dark">
      <div className="container-sm py-5 " data-aos="fade-up">
        <div className="section-header text-dark">
          <h1 className="font-weight-bold display-4">
            Welcome to {domainName.label}. <br />
            <span className="display-5">Chartered Accountants</span>
          </h1>
        </div>
        <p className="lead">
          We understand that managing your finances effectively is crucial for
          personal and business success. That's why we are dedicated to offering
          comprehensive financial services tailored to meet your unique needs.
          Welcome to our website, your gateway to a world of professional
          financial expertise and reliable solutions.
        </p>
        <h3 className="text-center"> Who We Are: </h3>
        <p className="lead">
          {domainName.label} is a leading provider of financial services,
          specializing in areas such as accounting, taxation, audit, and
          financial planning. With a team of highly skilled Chartered
          Accountants and industry experts, we are committed to delivering
          top-notch services that exceed our clients' expectations. Our
          experience, professionalism, and client-centric approach have earned
          us a stellar reputation in the industry.
        </p>
        <h3 className="text-center">Get Started Today:</h3>
        <h6 className="lead">
          Explore our website to learn more about our services, meet our team,
          and gain valuable insights through our resourceful blog. When you're
          ready to take control of your financial future, reach out to us to
          schedule a consultation. Let {domainName.label} be your trusted
          partner in achieving financial success.
        </h6>
      </div>
    </div>
  );
};

export default Company;
