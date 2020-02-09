import { flags } from '@oclif/command'
import BaseCommand from '../BaseCommand'

export default class RDFCommand extends BaseCommand {
    static description = 'describe the command here'

    static examples = [
    ]

    static flags = {
        ...BaseCommand.flags,
        help: flags.help({ char: 'h' }),
    }

    static args = [
        ...BaseCommand.args
    ]

    async run() {
        this.logger.info("starting compilation to rdf")
    }
}