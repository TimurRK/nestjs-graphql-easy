import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Section } from './section.entity';
import { SectionResolver } from './section.resolver';
import { SectionService } from './section.service';

@Module({
  imports: [TypeOrmModule.forFeature([Section])],
  providers: [SectionService, SectionResolver],
  exports: [SectionService],
})
export class SectionModule {}
