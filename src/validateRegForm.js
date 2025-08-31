const validateRegFormData = (formData) => {
  const errors = {};

  // Helper function to check if a value is empty or only whitespace
  const isEmpty = (value) => {
    if (Array.isArray(value)) return value.length === 0;
    return !value || value.toString().trim() === "";
  };

  // Helper function to validate email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Helper function to validate phone number (11 digits)
  // const isValidPhoneNumber = (phone) => {
  //   const phoneRegex = /^\d{11}$/;
  //   return phoneRegex.test(phone.replace(/\s+/g, ""));
  // };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phone.toString().replace(/\s+/g, ""));
  };

  // Validate required text fields
  const requiredTextFields = [
    "fullName",
    "email",
    "phoneNumber",
    "organizationName",
    "organizationType",
    "password",
    "confirmPassword",
  ];

  requiredTextFields.forEach((field) => {
    if (isEmpty(formData[field])) {
      errors[field] = `${field.replace(/_/g, " ")} is required`;
    }
  });

  // Validate email format
  if (!isEmpty(formData.email) && !isValidEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (formData.password.length < 8) {
    errors.password = "Must be at least 8 character(s)";
  }

  if (formData.password != formData.confirmPassword) {
    errors.password = "Password should match confirmed password";
  }

  if (!formData.isFocalPerson) {
    if (
      !isValidEmail(formData.alternateContact) &&
      !isValidPhoneNumber(formData.alternateContact)
    ) {
      errors.alternateContact =
        "Alternate contact should be a valid Email or Phone number";
    }
  }

  // Validate phone number (11 digits)
  if (
    !isEmpty(formData.phoneNumber) &&
    !isValidPhoneNumber(formData.phoneNumber)
  ) {
    errors.phoneNumber = "Phone number must be exactly 11 digits";
  }

  // Validate Status_of_support (check if it's still the default)
  // if (formData.Status_of_support === "Select status") {
  //   errors.Status_of_support = "Please select an appropriate status";
  // }

  // Validate Campaign_Focus_Other if "Other" is selected in Campaign_Focus
  // if (
  //   formData.Campaign_Focus.includes("Other") &&
  //   isEmpty(formData.Campaign_Focus_Other)
  // ) {
  //   errors.Campaign_Focus_Other = "Please specify other campaign focus";
  // }

  // Validate List_the_Partners if collaborating with partners
  // if (
  //   formData.Are_you_collaborating_with_any_other_partners === "Yes" &&
  //   isEmpty(formData.List_the_Partners)
  // ) {
  //   errors.List_the_Partners = "Please list your partners";
  // }

  // Validate date range (end date should be after start date)
  // if (
  //   !isEmpty(formData.Start_date_of_support) &&
  //   !isEmpty(formData.End_date_of_support)
  // ) {
  //   const startDate = new Date(formData.Start_date_of_support);
  //   const endDate = new Date(formData.End_date_of_support);

  //   if (endDate <= startDate) {
  //     errors.End_date_of_support = "End date must be after start date";
  //   }
  // }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export default validateRegFormData;
