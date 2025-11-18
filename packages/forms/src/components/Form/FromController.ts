import type * as Types from './Form.types'
import * as helpers from './helpers'


export class Controller<Values extends Types.Values> {
    private state: Types.State<Values>;
    private initialValues: Values;
    private validationSchema: any;
    // private subscribers: Set<() => void> = new Set();

    constructor(
        initialValues: Values,
        validationSchema: any
    ) {
        this.initialValues = initialValues;
        this.state = helpers.getInitialFormState(initialValues);
        this.validationSchema = validationSchema;
    }

    // Core

    public getState(): Types.State<Values> {
        return this.state;
    }

    private notifyUpdate() {
        console.log('Form state updated:', this.state);
    }

    // Validation
    private async validateForm(valuesToValidate: Values = this.state.values) {
        // This runs the entire schema for accurate cross-field validation
        const newErrors = await helpers.validateSchema(this.validationSchema, valuesToValidate);

        // Check if errors have actually changed before updating state
        const errorsChanged = JSON.stringify(newErrors) !== JSON.stringify(this.state.errors);

        if (errorsChanged) {
            this.state.errors = newErrors as Types.Errors<Values>;
        }

        return newErrors;
    }

    // Field mutators

    public async setFieldValue<FieldName extends keyof Values>(
        name: FieldName,
        value: Values[FieldName]
    ) {
        // 1. Update the value
        const newValues = {
            ...this.state.values,
            [name]: value
        } as Values;

        this.state.values = newValues;

        await this.validateForm(newValues);

        this.notifyUpdate();
    }

    public setFieldTouched<FieldName extends keyof Values>(
        name: FieldName,
        isTouched: boolean
    ) {
        if (this.state.touched[name] === isTouched) return; // Optimization
        this.state.touched = { ...this.state.touched, [name]: isTouched };
        this.notifyUpdate();
    }

    public setError<FieldName extends keyof Values>(
        name: FieldName,
        error: string | undefined
    ) {
        this.state.errors = { ...this.state.errors, [name]: error };
        this.notifyUpdate();
    }

    // Submission and reset mutators.

    public startSubmit() {
        this.state.isSubmitting = true
        this.notifyUpdate();
    }

    public finishSubmit() {
        this.state.isSubmitting = false
        this.state.isSubmitted = true;
        this.state.submitCount += 1;
        this.notifyUpdate();
    }

    public resetForm() {
        this.state = helpers.getInitialFormState(this.initialValues);
        this.notifyUpdate();
    }

}