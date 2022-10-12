import { useMutation } from "@blitzjs/rpc"
import createQuote from "app/quotes/mutations/createQuote"
import styles from "styles/tabby.module.sass"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { AuthenticationError, PromiseReturnType } from "blitz"
import { Submit } from "app/auth/validations"
import LabeledTextField from "app/core/components/LabeledTextField"

export default function Submission() {
	const [createquote] = useMutation(createQuote)
	return (
		<div className={styles.texty}>
			<Form
			submitText="Submit"
			schema={Submit}
			initialValues={{ content: "" }}
			onSubmit={async (values) => {
				try {
					const quotes = await createquote(values)
				} catch (error: any) {
					if (error instanceof AuthenticationError) {
						return { [FORM_ERROR]: "Sorry, you need to be logged in for that" }
					} else {
						return {
							[FORM_ERROR]:
								"Sorry, we had an unexpected error. Please try again. - " +
								error.toString(),
						}
					}
				}
			}}
			>
				<LabeledTextField name="content" label="Submit a Quote" placeholder="Submission" />
			</Form>
		</div>
	)
}
