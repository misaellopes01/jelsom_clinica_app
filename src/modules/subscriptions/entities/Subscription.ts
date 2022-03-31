import { User } from "../../../modules/users/entities/User";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuidV4 } from "uuid"


@Entity('subscriptions')
export class Subscription{
    
    @PrimaryColumn()
    id: string

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    user_id: string

    @Column()
    name_sick: string

    @Column()
    gender_sick: string

    @Column()
    age_sick: string

    @Column()
    topic: string

    @Column()
    hour: string

    @Column()
    date: string

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}