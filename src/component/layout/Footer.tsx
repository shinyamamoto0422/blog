import { Container, Group, useMantineColorScheme } from "@mantine/core";
import { SnsIcon } from "../feature/SnsIcon";
import { ProfileIcon } from "../ui/ProfileIcon";

export const Footer = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <footer className={`border-t-[1px] border-solid mt-4 md:mt-8 ${dark ? `border-gray-dark` : `border-gray-light`}`}>
      <Container className="flex flex-row justify-between items-center py-4">
        <ProfileIcon />
        <Group spacing={0} position="right" noWrap>
          <SnsIcon />
        </Group>
      </Container>
    </footer>
  );
};
