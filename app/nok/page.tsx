"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useEffect, type ReactNode } from "react";
import { Form } from "react-aria-components";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";

function BasicInfo(): ReactNode
{
    const { control } = useFormContext();

    return (
        <Controller
            name="name"
            control={ control }
            render={ ({ field: { value, onChange, onBlur } }) => (

                <Input
                    label="Name"
                    labelPlacement="outside"
                    value={ value }
                    onChange={ onChange }
                    onBlur={ onBlur }
                />
            ) }
        />
    );
}

export function InitialForm(): ReactNode
{
    const { handleSubmit, reset } = useFormContext();

    useEffect(() =>
    {
        reset({ name: "asd" });

    }, [reset]);

    function myHandleSubmit(): void
    {
        console.log("submit");
    }

    return (
        <Form
            onSubmit={ handleSubmit(myHandleSubmit) }
            className="flex flex-col gap-4"
        >
            <BasicInfo />

            <Button type="submit" color="primary" disableRipple>Submit</Button>
        </Form>
    );
}

export default function Page(): ReactNode
{
    const initialFormMethods = useForm(
        {
            mode: "onBlur",
            defaultValues: { name: "asd" }
        }
    );

    return (
        <FormProvider { ...initialFormMethods } >
            <InitialForm />
        </FormProvider>
    );
}
