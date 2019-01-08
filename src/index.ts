const MagicHomeDiscovery = require("magic-home").Discovery
const MagicHomeControl = require("magic-home").Control

type Device = { address: string; id: string; model: string }

const discovery = new MagicHomeDiscovery()

discovery
	.scan(1000, function(err: any, devices: Device[]) {
		console.log(devices)
		console.log(err)
	})
	.then((devices: Device[]) => {
		devices.forEach(device => {
			const light = new MagicHomeControl(device.address)
			light.turnOn((err: any, success: boolean) => {
				console.log(`Turning on ${device.model}`)
			})

			// setTimeout(() => {
			// 	light.turnOff(() => {
			// 		console.log(`Turning off ${device.model}`)
			// 	})
			// }, 2000)
		})
	})
