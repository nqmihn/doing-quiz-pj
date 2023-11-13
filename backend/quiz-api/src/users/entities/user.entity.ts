import { UserQuiz } from 'src/user-quiz/entities/user-quiz.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';

@Entity({})
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    username: string;

    @Column()
    role: string;

    @Column({ nullable: true })
    image: string;

    @Column({ nullable: true, type: 'text' })
    refresh_token: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => UserQuiz, (userQuiz) => userQuiz.user)
    userQuizzes: UserQuiz[]
}