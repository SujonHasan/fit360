export type SignInReq = {
  data: {
    email: string;
    password: string;
  };
  action: () => void;
};

export type SignInRes = {
  data: {
    user: {
      _id: string;
      username: string;
      email: string;
      firstName: string;
      lastName: string;
      phone: string;
      department: { _id: string; name: string };
      role: { _id: string; name: string };
      personal: { dateOfBirth: Date; bloodGroup: string; fathersName: string };
    };
  };
  message: string;
};

export type LogOutRes = {
  data: null;
  message: string;
};
