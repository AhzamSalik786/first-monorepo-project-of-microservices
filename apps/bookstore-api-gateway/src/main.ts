import { NestFactory } from '@nestjs/core';
import { BookstoreApiGatewayModule } from './bookstore-api-gateway.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(BookstoreApiGatewayModule);
  
  const option = new DocumentBuilder()
    .setTitle('microService-gateway')
    .setDescription('List of microService-gateway')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter Jwt Token',
        in: 'header',
      },
      'access-token',
    )
    .setExternalDoc('Postman Collection', '/api-tester-json')
    .build();
  const document = SwaggerModule.createDocument(app, option);
  SwaggerModule.setup('/api-tester', app, document);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
