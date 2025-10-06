import { HStack } from "@chakra-ui/react"
import {ColorModeSwitch} from "./ColorModeSwitch"
import { Logo } from "./Logo"
import { SearchInput } from "./SearchInput"

interface Props{
  onSearch: (searchText: string | null) => void ;
}

export const Nav = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding={4}>
        <Logo />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
  )
}
