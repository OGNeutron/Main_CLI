import * as program from 'commander'
import * as chalk from 'chalk'

program
	.version('0.0.1')
	.description('CLI for boilerplates and deploying(hopefully)')

program
	.command('new')
	.alias('n')
	.description('New project with pre-build boilerplates')
	.option('-p, --prisma_setup', 'Generates a Prisma boilerplate')
	.option('-r, --react-setup', 'Generates a react-typescript-boilerplate')
	.action(req => {
		console.log(req)
	})

program
	.command('build')
	.alias('b')
	.description('build and deploy new project')
	.action(req => {
		console.log(req)
	})

program.parse(process.argv)
