/*
 * LiskHQ/lisk-explorer
 * Copyright © 2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
const config = {};

/**
 * CONFIGURATION
 */
config.host = '0.0.0.0'; // Interface to listen on, 0.0.0.0 to listen on all available
config.port = 6040; // Port to listen on

/**
 * Lisk Service server
 *
 * Remember to rebuild the project using `npm run build` every time you change the params below.
 */
config.liskService = {};
config.liskService.baseUrl = 'https://explorer.lisk.io';
config.liskService.apiPath = '/api';

config.liskService.apiUrl = `${config.liskService.baseUrl}${config.liskService.apiPath}`;


module.exports = config;
