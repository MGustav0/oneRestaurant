import { v4 as uuidv4 } from 'uuid';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '@modules/users/infra/typeorm/entities/User';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id);
    return findUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUserByEmail = this.users.find(user => user.email === email);

    return findUserByEmail;
  }

  /** Retorna os dados, por uma promise, no final cria um User  */
  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuidv4(), name, email, password });

    this.users.push(user);

    return user;
  }
}

export default FakeUsersRepository;
