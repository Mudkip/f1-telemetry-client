import {F1Parser} from '../F1Parser';
import {PacketHeaderParser} from './PacketHeaderParser';
import {TimeTrialParserDataSetParser} from './TimeTrialParserDataSetParser';
import {PacketTimeTrialData} from './types';

export class PacketTimeTrialDataParser extends F1Parser<PacketTimeTrialData> {
  data: PacketTimeTrialData;

  constructor(buffer: Buffer, packetFormat: number, bigintEnabled: boolean) {
    super();

    this.endianess('little')
      .nest('m_header', {
        type: new PacketHeaderParser(packetFormat, bigintEnabled),
      })
      .nest('m_playerSessionBestDataSet', {
        type: new TimeTrialParserDataSetParser(),
      })
      .nest('m_personalBestDataSet', {
        type: new TimeTrialParserDataSetParser(),
      })
      .nest('m_rivalDataSet', {
        type: new TimeTrialParserDataSetParser(),
      });

    this.data = this.fromBuffer(buffer);
  }
}
