import React from "react";

const ProfileButton = ({ isEditing, setIsEditing }) => {
  return (
    <div className="mt-4 text-center">
      {!isEditing ? (
        <button
          onClick={() => setIsEditing(true)}
          className="btn btn-primary sm:w-80"
        >
          Edit Profile
        </button>
      ) : (
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => setIsEditing(false)}
            className="btn btn-outline"
          >
            Cancel
          </button>
          <button className="btn btn-primary">Save Changes</button>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
