import adapter from '@sveltejs/adapter-node';
import { Server } from 'socket.io'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ out: 'my-output-directory' })
	},
};

export default config;
