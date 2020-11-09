module.exports = (RED) => {
    'use strict';
    
    const axiosBase = require('axios');
    const Mustache = require('mustache');

    const main = function(config) {
        const node = this;
        RED.nodes.createNode(node, config);

        let base64Image = '';

        if (config.base64Image.length > 0) {
            base64Image = config.base64Image;
        }

        let output = config.output;

        const ModelURL = config.modelUrl;

        const axios = axiosBase.create({
            headers: {
                'Content-Type': 'application/json'
            }
        });

        //メインの処理
        async function handleEvent(msg) {
            let targetImage = Mustache.render(config.base64Image, msg);

            if (targetImage.length == 0) {
                targetImage = msg.payload;
            }

            try {
                const res = await axios.post(ModelURL, {
                    "inputs": {
                      "Image": targetImage
                    }
                });

                if (output === 'best') {
                    return Promise.resolve(res.data.outputs.Prediction[0]);
                } else {
                    return Promise.resolve(res.data);
                }
            } catch (error) {
                console.log(error);
                return Promise.resolve(null);
            }
        }

        node.on('input', async (msg) => {
            await handleEvent(msg).then(function(result) {
                msg.payload = result;
                node.send(msg)
            }).catch(err => {
                console.log(err);
                node.error(err);
            })
        });
    }

    RED.nodes.registerType("lobe-local", main);
}