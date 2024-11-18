import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { User } from '../users/user.entity';
export declare class BoardsService {
    private boardsRepository;
    private usersRepository;
    constructor(boardsRepository: Repository<Board>, usersRepository: Repository<User>);
    create(createBoardDto: CreateBoardDto, userId: number): Promise<Board>;
    findAll(): Promise<Board[]>;
    findOne(id: number): Promise<Board>;
    update(id: number, updateBoardDto: UpdateBoardDto): Promise<Board>;
    remove(id: number): Promise<void>;
}
