import {F1Parser} from '../F1Parser';
import {MarshalZone, TimeTrialDataset} from './types';

export class TimeTrialParserDataSetParser extends F1Parser<TimeTrialDataset> {
  constructor() {
    super();
    this.endianess('little')
      .uint8('m_carIdx')
      .uint8('m_teamId')
      .uint32le('m_lapTimeInMS')
      .uint32le('m_sector1TimeInMS')
      .uint32le('m_sector2TimeInMS')
      .uint32le('m_sector3TimeInMS')
      .uint8('m_tractionControl')
      .uint8('m_gearboxAssist')
      .uint8('m_antiLockBrakes')
      .uint8('m_equalCarPerformance')
      .uint8('m_customSetup')
      .uint8('m_valid')
  }
}
