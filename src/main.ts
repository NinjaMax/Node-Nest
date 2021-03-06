import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {

  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 6000;
  await app.listen(PORT, () => console.log(`Server Start on ${PORT}`));

}

start();
