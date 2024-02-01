import { github, linkedinLogo, mailLogo, phoneLogo } from "../assets";

const ProfileCard = ({
  name,
  lastName,
  phone,
  email,
  image,
  linkedin_link,
  github_link,
}) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-fit: contain rounded-[50%]"
        />
      </div>
      <div className="mt-5">
        <h3 className="textx-white font-bold text-[24px] ">
          {name} {lastName}
        </h3>
        <div className="flex flex-row items-center mt-2">
          <img src={mailLogo} alt="maiLogo" className="w-6 h-6" />
          <p className="text-secondary text-[14px] ml-2">{email}</p>
        </div>
        <div className="flex flex-row items-center mt-2">
          <img src={phoneLogo} alt="maiLogo" className="w-6 h-6" />
          <p className="text-secondary text-[14px] ml-2">{phone}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-10">
        <div
          onClick={() => window.open(github_link, "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110"
        >
          <img
            src={github}
            alt="github profile"
            className="w-full h-full object-contain"
          />
        </div>
        <div
          onClick={() => window.open(linkedin_link, "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110"
        >
          <img
            src={linkedinLogo}
            alt="linkedin profile"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
