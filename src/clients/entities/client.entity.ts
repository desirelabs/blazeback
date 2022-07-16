import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("client")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email?: string;

  @Column()
  phone: string;
}
