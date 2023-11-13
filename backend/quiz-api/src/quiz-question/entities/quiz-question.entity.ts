import { Quiz } from "src/quizzes/entities/quiz.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class QuizQuestion {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'text' })
    description: string;

    @Column()
    image: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column()
    quizId: number;

    @ManyToOne(() => Quiz, quiz => quiz.quizQuestions)
    @JoinColumn({ name: 'quizId' })
    quiz: Quiz;

}
