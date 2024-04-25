/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import { GridProps, TextFieldProps } from '@aws-amplify/ui-react';
import { BlogEntry } from '../API.ts';
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
export declare type BlogEntryUpdateFormInputValues = {
    month?: string;
    year?: string;
    data?: string;
};
export declare type BlogEntryUpdateFormValidationValues = {
    month?: ValidationFunction<string>;
    year?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogEntryUpdateFormOverridesProps = {
    BlogEntryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    month?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    data?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlogEntryUpdateFormProps = React.PropsWithChildren<{
    overrides?: BlogEntryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    blogEntry?: BlogEntry;
    onSubmit?: (fields: BlogEntryUpdateFormInputValues) => BlogEntryUpdateFormInputValues;
    onSuccess?: (fields: BlogEntryUpdateFormInputValues) => void;
    onError?: (fields: BlogEntryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogEntryUpdateFormInputValues) => BlogEntryUpdateFormInputValues;
    onValidate?: BlogEntryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BlogEntryUpdateForm(props: BlogEntryUpdateFormProps): React.ReactElement;
