import linkedIn from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/velaguez-szpiech-aa83aa243"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedIn} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={twitter} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={facebook} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={insta} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
