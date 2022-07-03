import {
  Header as MantineHeader,
  Container,
  Burger,
  ActionIcon,
  Group,
  useMantineColorScheme,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { Sun, MoonStars } from "tabler-icons-react";
import { FC } from "react";
import { LINK } from "@/constants/links";
import { ProfileIcon } from "../ui/ProfileIcon";
import { AppLink } from "../ui/AppLink";
import { SnsIcon } from "../feature/SnsIcon";

const NavList = [
  {
    label: "Home",
    link: LINK.HOME,
  },
  {
    label: "Profile",
    link: LINK.PROFILE,
  },
];

export const Header: FC = () => {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const items = NavList.map(({ link, label }) => (
    <AppLink
      key={label}
      href={link}
      className={`block py-2 px-3 font-medium leading-[1] dark:text-gray-700 decoration-[none]  ${
        dark ? "hover:bg-blue-500" : "hover:bg-gray-100"
      }`}
    >
      {label}
    </AppLink>
  ));

  return (
    <MantineHeader height={56} mb={50}>
      <Container className="flex justify-between items-center h-[56px]">
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          size="sm"
          className="sm:hidden"
        />
        <Group className="hidden w-[260px] sm:flex" spacing={5}>
          {items}
        </Group>
        <ProfileIcon />
        <Group spacing={0} className="w-[260px]" position="right" noWrap>
          <div className="flex mr-3">
            <SnsIcon />
          </div>
          <ActionIcon
            onClick={() => toggleColorScheme()}
            size="lg"
            className={`${dark ? "text-yellow-400" : "text-blue-400"}`}
          >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </Group>
      </Container>
    </MantineHeader>
  );
};