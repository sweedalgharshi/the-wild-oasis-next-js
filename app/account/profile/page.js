import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";

export const metadata = {
  title: "Update profile",
};

export default function Page() {
  const nationality = "french";
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-accent-400">Update your guest profile</h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process smoother and fater, See
        you soon!
      </p>

      <UpdateProfileForm>
        <SelectCountry
          name="nationality"
          defaultCountry={nationality}
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </UpdateProfileForm>
    </div>
  );
}
