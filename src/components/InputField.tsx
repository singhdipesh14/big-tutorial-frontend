import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
} from "@chakra-ui/react"
import { useField } from "formik"
import { InputHTMLAttributes } from "react"

export type IInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	name: string
	label: string
}

export default function InputField({
	label,
	size: _,
	...props
}: IInputFieldProps) {
	const [field, { error }] = useField(props)
	return (
		<FormControl isInvalid={!!error}>
			<FormLabel htmlFor={field.name}>{label}</FormLabel>
			<Input
				{...field}
				{...props}
				id={field.name}
				placeholder={props.placeholder}
			/>
			{error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
		</FormControl>
	)
}
