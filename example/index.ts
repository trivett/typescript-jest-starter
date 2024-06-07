interface GreetedPerson {
  firstName: string | number;
}

export const greetPerson = ({ firstName }: GreetedPerson): string => {
  if (!firstName) {
    throw new Error("No first name supplied");
  }

  return `Hello there, ${firstName}`;
};
