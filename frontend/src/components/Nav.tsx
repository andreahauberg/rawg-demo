import { HStack, Image} from "@chakra-ui/react"
import {ColorModeSwitch} from "./ColorModeSwitch"
import logo from "../assets/logo.webp"

export const Nav = () => {
  return (
    <HStack justifyContent={"space-between"} padding={4}>
        <Image src={logo} boxSize="60px"/>
        <ColorModeSwitch />
    </HStack>
  )
}
