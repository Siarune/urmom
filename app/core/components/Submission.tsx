import { useMutation } from "@blitzjs/rpc"
import createQuote from "app/quotes/mutations/createQuote"
import styles from "styles/quotes.module.sass"
import { Form, FORM_ERROR } from "app/core/components/Form"
import { AuthenticationError } from "blitz"
import { Submit } from "app/auth/validations"
import { Field } from "react-final-form"

export default function Submission() {
	const [createquote] = useMutation(createQuote)
	return (
		<div className={styles.texty}>
			<Form
			submitText="Send it!"
			schema={Submit}
			initialValues={{ content: "" }}
			className={styles.form}
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
				<Field className={styles.textbox}
				       component="textarea"
				       name="content"
				       placeholder="Insert wacky quote here"
				/>
			</Form>
		</div>
	)
}
