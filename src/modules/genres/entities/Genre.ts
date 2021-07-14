import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Game } from "../../games/entities/Game";

@Entity('genres')
export class Genre {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @ManyToMany(() => Game, (game) => game.genres)
  games: Game[];

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}