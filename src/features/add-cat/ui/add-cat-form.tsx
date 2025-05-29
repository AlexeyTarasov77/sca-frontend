"use client"
import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react";
import { Loader } from "@/src/shared/ui/loader";
import { ICreateCatPayload } from "@/src/entities/cats/api/types";
import { catsApi } from "@/src/entities/cats/api/cats-api";
import { redirect } from "next/navigation";
import { UIInput } from "@/src/shared/ui/form";
import { UIButton } from "@/src/shared/ui/button";
import { validationHelpers } from "@/src/shared/lib/validation";
import { useAddCat } from "./use-add-cat";

export function AddCatForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateCatPayload>();
  const { onSubmit, isLoading, serverError } = useAddCat()
  if (isLoading) {
    return <Loader />;
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <h4 className="font-bold text-xl">Add cat</h4>
      <UIInput.Text
        name="name"
        control={control}
        rules={{
          ...validationHelpers.required(),
        }}
        label="Cat name"
      />
      <UIInput.Text
        type="number"
        name="experience_years"
        control={control}
        rules={{
          ...validationHelpers.required(),
          ...validationHelpers.min(0),
          ...validationHelpers.max(100),
        }}
        label="Years of experience"
      />
      <UIInput.Text
        name="breed_name"
        control={control}
        rules={{
          ...validationHelpers.required(),
        }}
        label="Breed name"
      />
      <UIInput.Text
        type="number"
        name="salary"
        control={control}
        rules={{
          ...validationHelpers.required(),
          ...validationHelpers.min(0),
        }}
        label="Salary"
      />
      {serverError && <p className="text-red-500 text-lg">{serverError}</p>}
      <UIButton disabled={isLoading} type="submit" size="lg" color="purple">
        Add cat
      </UIButton>
    </form>
  );
}
