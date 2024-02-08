import Link from "next/link";
import { Flex, Text, Button } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      py={2}
      w="100%"
      h="full"
      bg="black"
      color="white"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text>
        All test on this website is based on this{" "}
        <Link
          href="http://www.lrjj.cn/encrm1.0/public/upload/MBTI-personality-test.pdf"
          target="_blank"
        >
          <Button
            colorScheme="primary"
            variant="link"
          >
            source
          </Button>
        </Link>
      </Text>
      <Text>
        🔨 Made by{" "}
        <Link
          href="https://www.mbtitestfree.com"
          target="_blank"
        >
          <Button
            colorScheme="primary"
            variant="link"
          >
            MBTI test 
          </Button>
        </Link>
      </Text>
    </Flex>
  );
}
