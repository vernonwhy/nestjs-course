import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor() {
        super({
            datasources: {
                db: {
                    url: "mongodb+srv://<vernonyang>:<153026Mongodb>@cluster1.tadna.mongodb.net/?retryWrites=true&w=majority"
                }
            }
        })
    }
}
