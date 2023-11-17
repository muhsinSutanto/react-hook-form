import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

const YoutubeForm = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>Username</label>
        <input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "username is required",
            },
          })}
        />
        <p>{errors.username?.message}</p>

        <label>Email</label>
        <input
          type="text"
          {...register("email", {
            // pattern: {
            //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            //   message: "invalid email format",
            // },
            validate: {
              notAdmin: (fieldValue) => {
                return fieldValue !== "test@gmail.com"
                  ? true
                  : "Enter a different email";
              },
            },
          })}
        />
        <p>{errors.email?.message}</p>

        <label>Channel</label>
        <input type="text" {...register("channel")} />

        <button>submi</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;
