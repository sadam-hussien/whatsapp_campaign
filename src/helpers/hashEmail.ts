export default function hashEmail(email: string) {
  const atIndex = email.indexOf("@");
  const username = email.substring(0, atIndex);
  const domain = email.substring(atIndex + 1);

  const hashedUsername = username.substring(0, 3) + "...";
  const hashedEmail = hashedUsername + "@" + domain;

  return hashedEmail;
}
