import * as Types from './Form.types'


export function getInitialFormState<Values extends Types.Values>(
    initialValues: Values
): Types.State<Values> {
    return {
        values: initialValues,
        errors: {},
        touched: {},
        isSubmitting: false,
        isSubmitted: false,
        submitCount: 0,
    };
}



export async function validateSchema<Values extends Types.Values>(
    schema: Types.Schema<Values>,
    values: Values
): Promise<Types.Errors<Values>> {
    const result = await schema.safeParseAsync(values);

    if (result.success) return {};

    // result.error is of type ZodError<Values>.
    // The collection of errors is stored in the 'issues' property, NOT 'errors'.
    const zodIssues = result.error.issues; 

    // Transform Zod's error object into our simplified { [field]: 'error message' } format
    const newErrors: Partial<Record<keyof Values, string>> = {};

    // 🌟 FIX: Use result.error.issues instead of result.error.errors
    zodIssues.forEach(issue => {
        // Zod errors often include the path to the field (e.g., ['username'])
        const fieldName = issue.path.join('.');
        if (fieldName) {
            // Only store the first error message for a given field
            if (!newErrors[fieldName as keyof Values]) {
                newErrors[fieldName as keyof Values] = issue.message;
            }
        }
    });

    return newErrors;
}

