import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

import SocialButton from "@components/common/SocialButton";
import DropdownMenu from "@components/header/DropdownMenu";

const HeaderTop = () => {
  return (
    <div className="text-sonic-silver border-cultured border-b-[1px] w-full">
      <div className="hidden xs:flex xs:justify-between xs:items-center px-4 text-xs uppercase py-[10px] max-w-[750px] lg:max-w-[980px] xl:max-w-[1200px] 2xl:max-w-[1350px] mx-auto">
        <ul className="hidden text-sonic-silver lg:flex justify-center gap-2 text-base">
          <li>
            <SocialButton className="p-1 rounded-lg">
              <IoLogoFacebook />
            </SocialButton>
          </li>
          <li>
            <SocialButton className="p-1 rounded-lg">
              <IoLogoTwitter />
            </SocialButton>
          </li>
          <li>
            <SocialButton className="p-1 rounded-lg">
              <IoLogoInstagram />
            </SocialButton>
          </li>
          <li>
            <SocialButton className="p-1 rounded-lg">
              <IoLogoLinkedin />
            </SocialButton>
          </li>
        </ul>

        <p>
          <span className="font-medium">Free Shipping</span>
          <span className="font-normal"> This week Order Over - $55</span>
        </p>
        <div className="hidden sm:flex sm:gap-4">
          <DropdownMenu list={["USD $", "EUR €"]} selectedIndex={0} />
          <DropdownMenu
            list={["English", "Español", "Français"]}
            selectedIndex={0}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
