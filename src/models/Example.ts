import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity, OneToMany } from 'typeorm';

@Entity(`ex_example`)
export class Example extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ length: 255, default: null })
	description!: string;
}
