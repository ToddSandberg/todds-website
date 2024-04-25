/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import { GridProps, TextFieldProps } from '@aws-amplify/ui-react';
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogEntryCreateFormInputValues = {
    month?: string;
    year?: string;
    data?: string;
};
export declare type BlogEntryCreateFormValidationValues = {
    month?: ValidationFunction<string>;
    year?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogEntryCreateFormOverridesProps = {
    BlogEntryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    month?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    data?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlogEntryCreateFormProps = React.PropsWithChildren<{
    overrides?: BlogEntryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BlogEntryCreateFormInputValues) => BlogEntryCreateFormInputValues;
    onSuccess?: (fields: BlogEntryCreateFormInputValues) => void;
    onError?: (fields: BlogEntryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogEntryCreateFormInputValues) => BlogEntryCreateFormInputValues;
    onValidate?: BlogEntryCreateFormValidationValues;
} & React.CSSProperties>;
export default function BlogEntryCreateForm(props: BlogEntryCreateFormProps): React.ReactElement;
