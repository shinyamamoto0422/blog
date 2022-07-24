import { Container, Group, useMantineColorScheme } from "@mantine/core";
import { SnsIcon } from "../feature/SnsIcon";
import { ProfileIcon } from "../ui/ProfileIcon";

export const Footer = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <footer className={`border-t-[1px] border-solid mt-8 ${dark ? `border-gray-dark` : `border-gray-light`}`}>
      <Container className="flex flex-col justify-between items-center py-4 sm:flex-row">
        <ProfileIcon />
        <Group spacing={0} position="right" noWrap>
          <SnsIcon />
        </Group>
      </Container>
    </footer>
  );
};
