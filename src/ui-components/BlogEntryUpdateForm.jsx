/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getBlogEntry } from "../graphql/queries";
import { updateBlogEntry } from "../graphql/mutations";
const client = generateClient();
export default function BlogEntryUpdateForm(props) {
  const {
    id: idProp,
    blogEntry: blogEntryModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    month: "",
    year: "",
    data: "",
  };
  const [month, setMonth] = React.useState(initialValues.month);
  const [year, setYear] = React.useState(initialValues.year);
  const [data, setData] = React.useState(initialValues.data);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = blogEntryRecord
      ? { ...initialValues, ...blogEntryRecord }
      : initialValues;
    setMonth(cleanValues.month);
    setYear(cleanValues.year);
    setData(cleanValues.data);
    setErrors({});
  };
  const [blogEntryRecord, setBlogEntryRecord] =
    React.useState(blogEntryModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBlogEntry.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBlogEntry
        : blogEntryModelProp;
      setBlogEntryRecord(record);
    };
    queryData();
  }, [idProp, blogEntryModelProp]);
  React.useEffect(resetStateValues, [blogEntryRecord]);
  const validations = {
    month: [{ type: "Required" }],
    year: [{ type: "Required" }],
    data: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          month,
          year,
          data: data ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateBlogEntry.replaceAll("__typename", ""),
            variables: {
              input: {
                id: blogEntryRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BlogEntryUpdateForm")}
      {...rest}
    >
      <TextField
        label="Month"
        isRequired={true}
        isReadOnly={false}
        value={month}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              month: value,
              year,
              data,
            };
            const result = onChange(modelFields);
            value = result?.month ?? value;
          }
          if (errors.month?.hasError) {
            runValidationTasks("month", value);
          }
          setMonth(value);
        }}
        onBlur={() => runValidationTasks("month", month)}
        errorMessage={errors.month?.errorMessage}
        hasError={errors.month?.hasError}
        {...getOverrideProps(overrides, "month")}
      ></TextField>
      <TextField
        label="Year"
        isRequired={true}
        isReadOnly={false}
        value={year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              month,
              year: value,
              data,
            };
            const result = onChange(modelFields);
            value = result?.year ?? value;
          }
          if (errors.year?.hasError) {
            runValidationTasks("year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("year", year)}
        errorMessage={errors.year?.errorMessage}
        hasError={errors.year?.hasError}
        {...getOverrideProps(overrides, "year")}
      ></TextField>
      <TextField
        label="Data"
        isRequired={false}
        isReadOnly={false}
        value={data}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              month,
              year,
              data: value,
            };
            const result = onChange(modelFields);
            value = result?.data ?? value;
          }
          if (errors.data?.hasError) {
            runValidationTasks("data", value);
          }
          setData(value);
        }}
        onBlur={() => runValidationTasks("data", data)}
        errorMessage={errors.data?.errorMessage}
        hasError={errors.data?.hasError}
        {...getOverrideProps(overrides, "data")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || blogEntryModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || blogEntryModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
