import { ConfigService } from '@nestjs/config';
export declare class AppConfigService {
    private configService;
    constructor(configService: ConfigService);
    get env(): string;
    get port(): string;
}
