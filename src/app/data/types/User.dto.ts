export interface UserDto{
    username: string;
    tickbox: boolean;
    firstname: string;
    lastname: string;
    password: string;
    createpassword: string;
    confirmpassword: string;
}

export const Constants: UserDto = {
    username: '',
    tickbox: false,
    firstname: '',
    lastname: '',
    createpassword: '',
    confirmpassword: '',
    password: '',
};