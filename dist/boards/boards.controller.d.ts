import { BoardsService } from './boards.service';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
export declare class BoardsController {
    private readonly boardsService;
    constructor(boardsService: BoardsService);
    create(createBoardDto: CreateBoardDto, req: any): Promise<Board>;
    findAll(): Promise<Board[]>;
    findOne(id: number): Promise<Board>;
    update(id: number, updateBoardDto: UpdateBoardDto): Promise<Board>;
    remove(id: number): Promise<void>;
}
