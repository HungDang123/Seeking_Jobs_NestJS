import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    name: string;

    @Prop()
    phone: string;

    @Prop()
    age: number;

    @Prop()
    address: string;

    @Prop()
    created_at: Date;

    @Prop()
    updated_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
