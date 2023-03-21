import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { icons, IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  //define an objetc to map the icons to a list of platforms
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    phone: MdPhoneIphone,
    nintendo: SiNintendo,
    globe: BsGlobe,
  };

  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platforms) => (
          <Icon
            key={platforms.id}
            as={iconMap[platforms.slug]}
            color="green.750"
          >
            {platforms.name}
          </Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
