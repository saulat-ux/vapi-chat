export const removeGlobalButton = () => {
  if (typeof window !== "undefined") {
    let currenturl = window.location.href;
    console.log("currenturl---", currenturl);
    if (currenturl !== "http://localhost:3000") {
      document.getElementById("vapi-support-btn").style.display = "none";
    }
  }
  console.log("currenturl---");
  return null;
};

export const formatPhoneNumber = (input) => {
  // Remove all non-numeric characters except the leading '+'
  const cleaned = input.replace(/(?!^\+)\D/g, "");

  // Check if the cleaned number starts with '+1' and is valid
  if (cleaned.startsWith("+1") && cleaned.length === 12) {
    return cleaned; // Return the number as is
  }

  // Check if the cleaned number has 10 digits (area code + phone number)
  if (cleaned.length === 10) {
    // Format as +1XXXXXXXXXX
    return `+1${cleaned}`;
  }

  // If input doesn't match the expected formats
  return null;
};
