import React, { FC } from "react";
import { Paper, Title, Button, Text } from "@mantine/core";
import { Blogs } from "@/types/blog";

type Props = {
  blogs: Blogs;
};

export const Home: FC<Props> = ({ blogs }) => {
  const { contents } = blogs;

  return (
    <div className="flex flex-wrap px-[12rem]">
      {contents.map((blog) => {
        return (
          <div key={blog.id} className="mr-8 mb-3">
            <Paper
              shadow="md"
              p="xl"
              radius="md"
              sx={{ backgroundImage: `url(${blog.eyecatch.url})` }}
              className="flex flex-col justify-between items-start w-[272px] h-[440px] bg-center bg-cover"
            >
              <div>
                <Text className="font-greycliff" size="xs">
                  {blog.category.name}
                </Text>
                <Title
                  order={3}
                  className="font-medium text-black uppercase	opacity-70"
                >
                  {blog.title}
                </Title>
              </div>
              <Button
                variant="white"
                color="dark"
                className="text-white bg-gray-500"
              >
                Read article
              </Button>
            </Paper>
          </div>
        );
      })}
    </div>
  );
};
