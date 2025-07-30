const validateFormData = (formData) => {
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
  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ""));
  };

  // Validate required text fields
  const requiredTextFields = [
    "Name_of_Respondent",
    "Phone_Number_of_Respondent",
    "Email_Address_of_Respondent",
    "Designation_of_respondent",
    "Name_of_Organization_Agency",
    "Type_of_Organization_Agency",
    "Start_date_of_support",
    "End_date_of_support",
    "Who_is_the_Funder_of_your_project",
    "Key_Performance_Indicators",
  ];

  requiredTextFields.forEach((field) => {
    if (isEmpty(formData[field])) {
      errors[field] = `${field.replace(/_/g, " ")} is required`;
    }
  });

  // Validate required array fields
  const requiredArrayFields = [
    "Level_of_support",
    "States_supported",
    "LGA_supported",
    "Campaign_Focus",
    "Type_of_Support",
    "Thematic_areas_supported",
  ];

  requiredArrayFields.forEach((field) => {
    if (isEmpty(formData[field])) {
      errors[field] = `${field.replace(
        /_/g,
        " "
      )} must have at least one selection`;
    }
  });

  // Validate email format
  if (
    !isEmpty(formData.Email_Address_of_Respondent) &&
    !isValidEmail(formData.Email_Address_of_Respondent)
  ) {
    errors.Email_Address_of_Respondent = "Please enter a valid email address";
  }

  // Validate phone number (11 digits)
  if (
    !isEmpty(formData.Phone_Number_of_Respondent) &&
    !isValidPhoneNumber(formData.Phone_Number_of_Respondent)
  ) {
    errors.Phone_Number_of_Respondent =
      "Phone number must be exactly 11 digits";
  }

  // Validate Status_of_support (check if it's still the default)
  if (formData.Status_of_support === "Not started") {
    errors.Status_of_support = "Please select an appropriate status";
  }

  // Validate Campaign_Focus_Other if "Other" is selected in Campaign_Focus
  if (
    formData.Campaign_Focus.includes("Other") &&
    isEmpty(formData.Campaign_Focus_Other)
  ) {
    errors.Campaign_Focus_Other = "Please specify other campaign focus";
  }

  // Validate List_the_Partners if collaborating with partners
  if (
    formData.Are_you_collaborating_with_any_other_partners === "Yes" &&
    isEmpty(formData.List_the_Partners)
  ) {
    errors.List_the_Partners = "Please list your partners";
  }

  // Validate date range (end date should be after start date)
  if (
    !isEmpty(formData.Start_date_of_support) &&
    !isEmpty(formData.End_date_of_support)
  ) {
    const startDate = new Date(formData.Start_date_of_support);
    const endDate = new Date(formData.End_date_of_support);

    if (endDate <= startDate) {
      errors.End_date_of_support = "End date must be after start date";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export default validateFormData;
