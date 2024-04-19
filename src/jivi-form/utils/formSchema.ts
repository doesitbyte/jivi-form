import { z } from 'zod'

export enum GenderEnum {
  Male,
  Female,
  Other
}

export const FormDataSchema = z.object({
  heartRate: z.number(),
  bpSys: z.number(),
  bpDia: z.number(),
  name: z.string(
    {
      required_error: "This field is required",
    }
  ).min(1, 'This field is required'),
  dateOfBirth: z.date(
    {
      required_error: "This field is required",
      invalid_type_error: "Invalid date",
    }
  ).max(
    new Date(),
    {
      message: "Date of birth should be earlier than today"
    }
  ),
  gender: z.nativeEnum(GenderEnum, {
    errorMap: (issue, _ctx) => {
      console.log(issue);

      return { message: 'This field is required' };
    },
  })
});

export type TFormDataSchema = z.infer<typeof FormDataSchema>;