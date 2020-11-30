import { container } from 'tsyringe';

import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider';

/** registerSingleton instancia a classe uma única vez durante todo o ciclo de vida
 * da aplicação.
 */
container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
