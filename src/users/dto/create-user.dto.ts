import { IsNotEmpty } from "class-validator"

export class CreateUserDto {
    _id:string

    @IsNotEmpty()
    username: string
    passwordHash:string
}