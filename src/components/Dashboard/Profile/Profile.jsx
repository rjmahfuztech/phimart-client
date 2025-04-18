import { useForm } from "react-hook-form";
import ProfileForm from "./ProfileForm";
import { useState } from "react";
import ProfileButton from "./ProfileButton";
import PasswordChangeForm from "./PasswordChangeForm";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="mx-4 my-10">
      <div className="bg-base-100 rounded-lg max-w-3xl mx-auto shadow-xl p-8">
        <h2 className="text-xl md:text-2xl font-bold">Profile Information</h2>
        {/* profile form  */}
        <form>
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
