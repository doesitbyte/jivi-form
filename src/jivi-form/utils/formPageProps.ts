import { UseFormReturn } from "react-hook-form";
import { TFormDataSchema } from "./formSchema";
import React from "react";

export type FormPageProps = {
    formMethods: UseFormReturn<TFormDataSchema>,
}

export type FormPageComponent = React.FC<FormPageProps>;