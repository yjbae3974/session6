import { Board } from '../boards/board.entity';
import { UserRoleTypes } from './types/user-roles.types';
export declare class User {
    id: number;
    username: string;
    password: string;
    boards: Board[];
    role: UserRoleTypes;
}
