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
    <div
      data-section="header-top"
      className="text-sonic-silver border-cultured xs:block hidden w-full border-b-[1px]"
    >
      <div className="xs:justify-between xs:items-center mx-auto flex max-w-[750px] px-4 py-[10px] text-xs uppercase lg:max-w-[980px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
        <ul className="text-sonic-silver hidden justify-center gap-2 text-base lg:flex">
          <li>
            <SocialButton className="rounded-lg p-1">
              <IoLogoFacebook />
            </SocialButton>
          </li>
          <li>
            <SocialButton className="rounded-lg p-1">
              <IoLogoTwitter />
            </SocialButton>
          </li>
          <li>
            <SocialButton className="rounded-lg p-1">
              <IoLogoInstagram />
            </SocialButton>
          </li>
          <li>
            <SocialButton className="rounded-lg p-1">
              <IoLogoLinkedin />
            </SocialButton>
          </li>
        </ul>

        <p>
          <span className="font-medium">Free Shipping</span>
          <span className="font-normal"> This week Order Over - $55</span>
        </p>
        <div className="hidden sm:flex sm:gap-4">
          <DropdownMenu
            name="currency-selector"
            list={["USD $", "EUR €"]}
            selectedIndex={0}
          />
          <DropdownMenu
            name="language-selector"
            list={["English", "Español", "Français"]}
            selectedIndex={0}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
