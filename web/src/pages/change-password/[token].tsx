import { NextPage } from "next";
import { Wrapper } from "../../components/Wrapper";
import { Formik, Form } from "formik";
import login from "../login";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../../components/InputField";
import { Box, Button } from "@chakra-ui/react";

const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  return (
    <Wrapper>
      <Formik
        initialValues={{ newPassword: "" }}
        onSubmit={async (values, { setErrors }) => {
          //   const response = await login(values);
          //   if (response.data?.login.errors) {
          //     await setErrors(toErrorMap(response.data.login.errors));
          //   } else if (response.data?.login.user) {
          //     //worked
          //     router.push("/");
          //   }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="newPassword"
              placeholder="new password"
              label="New Password"
              type="password"
            />
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              colorScheme="teal"
            >
              Change Password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

ChangePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};

export default ChangePassword;
