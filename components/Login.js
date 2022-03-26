import { AiFillWechat } from "react-icons/ai";
import Head from "next/head";
import { Box, Button, Center, Stack, Flex, Heading, Text} from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";

export default function Login() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Flex w="100%" align="center" justifyContent="center" bgColor="green.100">
        <Heading marginTop={5}>TALK-A-TIVE</Heading>
      </Flex>
      <Center h="90vh" bgColor="green.100">
        <Stack
          align="center"
          bgColor="red.200"
          p={16}
          rounded="3xl"
          spacing={12}
          boxShadow="lg"
        >
          <Box
            bgColor="blue.400"
            w="fit-content"
            p={5}
            rounded="3xl"
            boxShadow="md"
          >
            <AiFillWechat size={250} color="black" />
          </Box>

          <Button
            boxShadow="md"
            bgColor="blue.400"
            onClick={() => signInWithGoogle("", { prompt: "select_account" })}
          >
            Sign In with Google
          </Button>
        </Stack>
      </Center>
      <Flex w="100%" align="center" justifyContent="center" bgColor="green.100">
        <Text marginBottom={15} fontWeight='semibold'>Created By Aayush Soni</Text>
      </Flex>
    </>
  );
}
