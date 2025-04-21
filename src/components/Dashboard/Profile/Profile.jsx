import { useForm } from "react-hook-form";
import ProfileForm from "./ProfileForm";
import { useEffect, useState } from "react";
import ProfileButton from "./ProfileButton";
import PasswordChangeForm from "./PasswordChangeForm";
import useAuthContext from "../../../hooks/useAuthContext";
import Swal from "sweetalert2";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, updateUserProfile, changeUserPassword } = useAuthContext();
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    Object.keys(user).forEach((key) => setValue(key, user[key]));
  }, [user, setValue]);

  const onSubmit = async (data) => {
    try {
      const profilePayLoad = {
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        phone_number: data.phone_number,
      };
      await updateUserProfile(profilePayLoad);

      // change password
      if (data.current_password && data.new_password) {
        const passwordPayLoad = {
          current_password: data.current_password,
          new_password: data.new_password,
        };
        await changeUserPassword(passwordPayLoad);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-4 my-10">
      <div className="bg-base-100 rounded-lg max-w-3xl mx-auto shadow-xl p-8">
        <h2 className="text-xl md:text-2xl font-bold">Profile Information</h2>
        {/* profile form  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfileForm
            register={register}
            errors={errors}
            isEditing={isEditing}
          />
          <PasswordChangeForm
            register={register}
            watch={watch}
            errors={errors}
            isEditing={isEditing}
          />
          <ProfileButton isEditing={isEditing} setIsEditing={setIsEditing} />
        </form>
      </div>
    </div>
  );
};

export default Profile;
