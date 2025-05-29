import { catsApi } from "@/src/entities/cats/api/cats-api";
import { ICreateCatPayload } from "@/src/entities/cats/api/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

export const useAddCat = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const onSubmit: SubmitHandler<ICreateCatPayload> = async (data) => {
    setIsLoading(true)
    try {
      const resp = await catsApi.createCat(data)
      if (!resp.success) {
        setError(resp.message)
        return
      }
      router.push("/cats/")
    } catch (err) {
      setError(String(err))
    }
    finally {
      setIsLoading(false)
    }
  };
  return { isLoading, serverError: error, onSubmit }
}
