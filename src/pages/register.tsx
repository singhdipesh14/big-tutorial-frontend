import { Box, Button } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import { useRouter } from "next/router"
import { useMutation } from "urql"
import InputField from "../components/InputField"
import Wrapper from "../components/Wrapper"
import { useRegisterMutation } from "../generated/graphql"
import { toErrorMap } from "../utils/toErrorMap"

export interface IRegisterProps {}

export default function Register(props: IRegisterProps) {
	const router = useRouter()
	const [, register] = useRegisterMutation()
	return (
		<Wrapper variant="small">
			<Formik
				initialValues={{ username: "", password: "" }}
				onSubmit={async (values, { setErrors }) => {
					const response = await register(values)
					if (response.data?.register.errors) {
						setErrors(toErrorMap(response.data.register.errors))
					} else if (response.data?.register.user) {
						router.push("/")
					}
				}}>
				{({ isSubmitting }) => (
					<Form>
						<InputField name="username" placeholder="username" label="Username" />
						<Box mt={4}>
							<InputField
								name="password"
								placeholder="password"
								label="Password"
								type="password"
							/>
						</Box>
						<Button mt={4} type="submit" bgColor="teal" isLoading={isSubmitting}>
							Register
						</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	)
}
