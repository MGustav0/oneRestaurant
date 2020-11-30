import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import CreateUserService from '@modules/users/services/CreateUserService';

import AppError from '@shared/errors/AppError';

let fakeUsersRepository: FakeUsersRepository;

let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    createUser = new CreateUserService(fakeUsersRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'simple_password',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'simple_password',
    });

    await expect(
      createUser.execute({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'simple_password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
