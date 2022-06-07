import { Module } from '@nestjs/common';
import { SummaryController } from './summary.controller';
import { SummaryService } from './summary.service';
import { ReportService } from 'src/report/report.service';

@Module({
  controllers: [SummaryController],
  providers: [SummaryService, ReportService],
})
export class SummaryModule {}
