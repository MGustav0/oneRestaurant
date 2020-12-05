import IMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parseTemplate(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;
