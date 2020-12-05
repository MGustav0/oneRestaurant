import IParseTemplateMailDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';

export default interface ITemplateMailProvider {
  parseTemplate(data: IParseTemplateMailDTO): Promise<string>;
}
