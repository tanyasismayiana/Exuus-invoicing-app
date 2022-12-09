import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

import logging from './config/logging';
import config from './config/config';
import userRoutes from './routes/user.routes';
import itemRoutes from './routes/item.routes';
import clientRoutes from './routes/client.routes';
import invoiceRoutes from './routes/invoice.routes';
import paymentRoutes from './routes/payment.routes';

const NAMESPACE = 'Server';
const router = express();

/** Log the requests */
router.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });
    next();
});

/** Parse the body of the request */
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/** API rules */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

/** App routes */
router.use('/api/users', userRoutes);
router.use('/api/items', itemRoutes);
router.use('/api/clients', clientRoutes);
router.use('/api/invoices', invoiceRoutes);
router.use('/api/payments', paymentRoutes);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Resource not found on this server');

    res.status(404).json({
        message: error.message
    });
});

router.use((req, res, next) => {
    const error = new Error('Something went wrong. check logs for details');

    res.status(500).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));
