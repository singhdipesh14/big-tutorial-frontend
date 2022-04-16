import { Box } from "@chakra-ui/react"

export interface IWrapperProps {
	children: React.ReactNode
	variant?: "small" | "regular"
}

export default function Wrapper({
	children,
	variant = "regular",
}: IWrapperProps) {
	return (
		<Box
			maxW={variant === "regular" ? "800px" : "400px"}
			w="100%"
			mt={8}
			mx="auto">
			{children}
		</Box>
	)
}
