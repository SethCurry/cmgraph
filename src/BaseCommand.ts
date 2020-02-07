import { Command, flags } from '@oclif/command';
import { Input, OutputArgs, OutputFlags } from '@oclif/parser';
import pino from 'pino'

export default abstract class BaseCommand extends Command {
    static flags = {
        help: flags.help({ char: 'h' }),
        loglevel: flags.string({ char: "v", default: "debug", options: ["debug", "info", "warn", "error"] })
    };

    static args = [];

    protected parsedArgs?: OutputArgs<any>;
    protected parsedFlags?: OutputFlags<typeof BaseCommand.flags>;

    protected logger = pino({})

    async init(): Promise<void> {
        const { args, flags } = this.parse(this.constructor as Input<typeof BaseCommand.flags>);
        this.parsedArgs = args;
        this.parsedFlags = flags;

        if (this.parsedFlags !== undefined) {
            this.logger = pino({
                level: this.parsedFlags.loglevel
            })
        }
    }
}