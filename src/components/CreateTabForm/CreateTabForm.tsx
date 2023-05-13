import type { FC } from "react";
import { useForm } from "react-hook-form";
import { useTabsService } from "~/services/tabsService/useTabsService";
import { SubmitButton } from "~/components";

interface CreateTabFormData {
  tabTitle: string;
}

export const CreateTabForm: FC = () => {
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<CreateTabFormData>();

  const tabsService = useTabsService();

  return (
    <>
      <form>
        <input {...register("tabTitle", { required: true })} />
        {errors.tabTitle && <p>Tab title is required</p>}
      </form>
      <SubmitButton
        text="Create Tab"
        callback={() =>
          tabsService.createTab({
            title: getValues().tabTitle,
          })
        }
      />
    </>
  );
};
