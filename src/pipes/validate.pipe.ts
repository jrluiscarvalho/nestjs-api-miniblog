import {
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  ValidationPipe,
  UnprocessableEntityException,
} from '@nestjs/common';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
  public async transform(value, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (e) {
      console.log(e.response.message);
      if (e instanceof BadRequestException) {
        throw new UnprocessableEntityException(this.handleError(['Error']));
      }
    }
  }

  private handleError(errors) {
    return errors.map((error) => error.constraints);
  }
}
