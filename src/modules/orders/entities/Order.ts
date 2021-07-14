import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Game } from "../../games/entities/Game";
import { User } from "../../users/entities/User";

@Entity('orders')
export class Order {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @ManyToMany(() => Game, (game) => game.genres)
  games: Game[]
  
  @ManyToOne(() => User, (user) => user.orders)
  user: User

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}