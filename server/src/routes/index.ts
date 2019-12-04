/**
 * /api/*
 */

import express from 'express';
import axios from 'axios';

const apiRoutes = express.Router();

apiRoutes.get('/', (request, response) => {
  response.status(200).send('Welcome to RESTful API');
});

type TSubscribeRequest = {
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
};

apiRoutes.post(
  '/subscribe',
  async (request: { body: TSubscribeRequest }, response) => {
    // get form data
    const { firstName, lastName, email, mobilePhone } = request.body;

    try {
      // send data to 3rd API
      const test3rdResponse = await axios.post(
        'https://ckzvgrbymezqegu.form.io/reacttestforem/submission',
        {
          data: { firstName, lastName, email, mobilePhone }
        },
        { headers: { 'x-auth': 'react-test' } }
      );

      // send response to client
      if (test3rdResponse.status === 200) {
        response.status(200).send('ok');
      } else {
        throw new Error(
          'Sorry, the following error happened (for debug, dev env):\n' +
            test3rdResponse.status +
            ' ' +
            test3rdResponse.statusText +
            ': ' +
            test3rdResponse.data
        );
      }
    } catch (error) {
      console.error('\nError:');
      console.error(error.response.status + ' ' + error.response.statusText);
      console.error('Error Message: ' + error.response.data + '\n');
      response
        .status(500)
        .send('Sorry, something wrong when connecting to 3rd party API');
    }
  }
);

export default apiRoutes;
