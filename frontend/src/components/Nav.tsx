import { HStack } from "@chakra-ui/react"
import {ColorModeSwitch} from "./ColorModeSwitch"
import { Logo } from "./Logo"


export const Nav = () => {
  return (
    <HStack justifyContent={"space-between"} padding={4}>
        <Logo />
        <ColorModeSwitch />
    </HStack>
  )
}
