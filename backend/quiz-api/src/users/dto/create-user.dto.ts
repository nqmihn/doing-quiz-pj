import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: "Invalid Email" })
    email: string;
    @IsNotEmpty({ message: "Invalid Password" })
    password: string;
    @IsNotEmpty({ message: "Invalid Username" })
    username: string;
    @IsNotEmpty({ message: "Invalid Role" })
    role: string;

    image: string;


}
