// ** This takes the url as params and removes the slash and return it ** //

export function parseUrl(url) {
  return url.split("/")[1];
}

export const emailValidator = (email) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) {
    return "Email cannot be empty!.";
  }
  if (!re.test(email)) {
    return "We need a valid email address.";
  }

  return "";
};

export const typeValidator = (name, type) => {
  if (!name || name.length <= 0) {
    return `${type} cannot be empty!`;
  }

  return "";
};

export const confirmPasswordValidator = (password, confirmPassword) => {
  if (!confirmPassword || confirmPassword.length <= 0) {
    return "Confirm Password cannot be empty.";
  }
  if (password !== confirmPassword) {
    return "Password is not the same as confirm password!";
  }

  return "";
};
