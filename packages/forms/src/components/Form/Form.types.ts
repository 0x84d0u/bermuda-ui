import z from 'zod';

export type Values = Record<string, any>;
export type Errors<V extends Values> = Partial<Record<keyof V, string>>
export type Touched<V extends Values> = Partial<Record<keyof V, boolean>>
export type Schema<V extends Values> = z.ZodType<V>;

export type State<V extends Values> = {
    values: V
    errors: Errors<V>
    touched: Touched<V>
    isSubmitting: boolean
    isSubmitted: boolean
    submitCount: number
}